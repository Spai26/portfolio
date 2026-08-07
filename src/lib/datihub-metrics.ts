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

function emptyMetrics(): DatiHubMetrics {
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

export async function fetchDatiHubMetrics(): Promise<DatiHubMetrics> {
  const endpoint = import.meta.env.DATIHUB_API;
  
  if (!endpoint) {
    return emptyMetrics();
  }

  try {
    const response = await fetch(endpoint);
    
    if (!response.ok) {
      return emptyMetrics();
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
  } catch {
    return emptyMetrics();
  }
}
