const fetchEmojiData = async () => {
  const response = await fetch("/data/emoji.json");
  const jsonData = await response.json();
  return jsonData;
};

const renderEmojiViewer = async () => {
  const container = document.createElement("ul");
  container.classList.add("emoji-list");

  const emojiData = await fetchEmojiData();

  const emojis = emojiData.map((emoji) => {
    const item = document.createElement("li");
    item.innerHTML = emoji.htmlCode;
    return item;
  });

  container.append(...emojis);

  document.body.appendChild(container);
};

renderEmojiViewer();
