export default function ColoredText({ text, colorWords, color = ["#0A66C2"] }) {
  const words = text.split(" ");
  const paintText = colorWords.split(" ");

  let multipleColor = 0,
    singleColor = 1,
    index;

  return (
    <>
      {words.map((word, idx) => {
        const isColorWord = paintText.includes(word);

        // get multiple color index
        multipleColor = isColorWord ? (multipleColor += 1) : multipleColor;
        // get general index
        index = color.length > 1 ? multipleColor : singleColor;

        return (
          <span
            key={idx}
            style={{
              color: isColorWord ? color[index - 1] : "black",
            }}
          >
            {word}{" "}
          </span>
        );
      })}
    </>
  );
}
