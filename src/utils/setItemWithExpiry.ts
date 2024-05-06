function setItemWithExpiry(key: string, value: string, expiryInDays: number) {
  const now = new Date();
  // `expiryInDays`是从现在起多少天后数据过期
  const expiry = new Date(now.getTime() + expiryInDays * 60000 * 60 * 24);
  
  const item = {
      value: value,
      expiry: expiry.toISOString(),
  };
  localStorage.setItem(key, JSON.stringify(item));
}