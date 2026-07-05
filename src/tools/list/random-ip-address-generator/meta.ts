import type { ToolMeta } from '../../definitions';

export const meta: ToolMeta = {
  slug: 'random-ip-address-generator',
  title: 'Random IP Address Generator',
  description: 'Generate lists of secure random IPv4 and IPv6 addresses online. Configure quantity and copy results instantly.',
  category: 'generators',
  keywords: ['random ip generator', 'generate random ip', 'ipv4 generator', 'ipv6 generator', 'mock ip address'],
  faqs: [
    {
      question: 'Which IP versions are supported?',
      answer: 'We support both IPv4 (32-bit addresses formatted as four octets, e.g. 192.168.1.1) and IPv6 (128-bit hexadecimal addresses formatted as eight blocks, e.g. 2001:db8::8a2e:370:7334).'
    },
    {
      question: 'Are the IP addresses active?',
      answer: 'No, these IP addresses are generated mathematically at random using browser entropy. They are meant for testing, database mock values, or networking design demonstration.'
    }
  ],
  educationalContent: {
    whatIsIt: 'A Random IP Address Generator creates mock IPv4/IPv6 networks and nodes for developers, system administrators, and network engineers to use in testing environments.',
    howToUse: '1. Select the IP version (IPv4 or IPv6).\n2. Choose the quantity of addresses to generate.\n3. Click "Generate IPs" and copy the resulting list.'
  }
};
