export function whatsappUrl(phone: string, message: string): string {
  return `https://wa.me/${phone}?text=${encodeURI(message)}`;
}
