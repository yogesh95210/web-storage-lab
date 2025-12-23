export function setCookie(
  name: string,
  value: string,
  days: number = 1
): void {
  const expires = new Date(
    Date.now() + days * 24 * 60 * 60 * 1000
  ).toUTCString();

  document.cookie = `${name}=${value}; expires=${expires}; path=/`;
}

export function getCookie(name: string): string | undefined {
  return document.cookie
    .split("; ")
    .find(row => row.startsWith(name + "="))
    ?.split("=")[1];
}

export function deleteCookie(name: string): void {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
}
