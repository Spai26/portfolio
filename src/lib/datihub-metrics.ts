import { readFileSync } from 'fs';
import { resolve } from 'path';

export interface DatiHubMetrics {
  activeConversations: number;
  conversationsStarted: number;
  conversationsCompleted: number;
  conversationsAbandoned: number;
  activeFlows: number;
  services: {
    whatsapp: number;
    ai: number;
    database: number;
    redis: number;
    email: number;
    webchat: number;
  };
  httpRequestsActive: number;
  socketConnections: number;
}

function parsePrometheusMetric(text: string, metricName: string): number {
  const regex = new RegExp(`^${metricName}(?:\\{[^}]*\\})?\\s+(\\d+(?:\\.\\d+)?)$`, 'm');
  const match = text.match(regex);
  return match ? parseFloat(match[1]) : 0;
}

function parseServiceMetric(text: string, serviceName: string): number {
  const regex = new RegExp(`^service_${serviceName.replace(/[()]/g, '_')}_up_count\\s+(\\d+)$`, 'm');
  const match = text.match(regex);
  return match ? parseInt(match[1], 10) : 0;
}

export async function fetchDatiHubMetrics(): Promise<DatiHubMetrics> {
  // Load .env manually
  const envPath = resolve(process.cwd(), '.env');
  const envContent = readFileSync(envPath, 'utf-8');
  const env: Record<string, string> = {};
  for (const line of envContent.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const [key, ...valueParts] = trimmed.split('=');
    let value = valueParts.join('=').trim();
    if ((value.startsWith('"') && value.endsWith('"')) || 
        (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    env[key.trim()] = value;
  }

  const endpoint = env.datihub_api || env.DATIHUB_API;
  
  if (!endpoint) {
    console.warn('⚠️ DATIHUB_API not found in .env, returning mock data');
    return {
      activeConversations: 0,
      conversationsStarted: 0,
      conversationsCompleted: 0,
      conversationsAbandoned: 0,
      activeFlows: 0,
      services: { whatsapp: 0, ai: 0, database: 0, redis: 0, email: 0, webchat: 0 },
      httpRequestsActive: 0,
      socketConnections: 0,
    };
  }

  try {
    const response = await fetch(endpoint);
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const text = await response.text();

    return {
      activeConversations: parsePrometheusMetric(text, 'active_conversations'),
      conversationsStarted: parsePrometheusMetric(text, 'conversations_started_total'),
      conversationsCompleted: parsePrometheusMetric(text, 'conversations_completed_total'),
      conversationsAbandoned: parsePrometheusMetric(text, 'conversations_abandoned_total'),
      activeFlows: parsePrometheusMetric(text, 'active_flows'),
      services: {
        whatsapp: parseServiceMetric(text, 'WhatsApp Cloud API'),
        ai: parseServiceMetric(text, 'AI (AWS Bedrock)'),
        database: parseServiceMetric(text, 'Database (Prisma)'),
        redis: parseServiceMetric(text, 'Redis'),
        email: parseServiceMetric(text, 'Email (Brevo)'),
        webchat: parseServiceMetric(text, 'WebChat Socket'),
      },
      httpRequestsActive: parsePrometheusMetric(text, 'http_requests_active'),
      socketConnections: parsePrometheusMetric(text, 'socket_connections_current'),
    };
  } catch (error) {
    console.error('❌ Error fetching DatiHub metrics:', error);
    return {
      activeConversations: 0,
      conversationsStarted: 0,
      conversationsCompleted: 0,
      conversationsAbandoned: 0,
      activeFlows: 0,
      services: { whatsapp: 0, ai: 0, database: 0, redis: 0, email: 0, webchat: 0 },
      httpRequestsActive: 0,
      socketConnections: 0,
    };
  }
}
