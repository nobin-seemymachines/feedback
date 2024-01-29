let selectedEmoji = 0;

function selectEmoji(imageNumber) {
  // Check if the clicked emoji is already selected
  if (selectedEmoji === imageNumber) {
    // Deselect the clicked emoji
    deselectEmoji(imageNumber);
    checkSubmitButton();
  } else {
    // Deselect the currently selected emoji (if any)
    if (selectedEmoji !== 0) {
      deselectEmoji(selectedEmoji);
    }

    // Select the clicked emoji
    selectedEmoji = imageNumber;
    const imageElement = document.getElementById(`img${imageNumber}`);
    imageElement.src = `images/img${imageNumber}a.gif`; // Change this to the selected image source

    // Add the hover effect class when the emoji is selected
    const emojiDiv = document.getElementById(`emojidiv${imageNumber}`);
    emojiDiv.classList.add("selected");
    imageElement.classList.add(`img-selected`);
  }
}

function deselectEmoji(imageNumber) {
  // Deselect the given emoji
  const imageElement = document.getElementById(`img${imageNumber}`);
  imageElement.src = `images/img${imageNumber}.svg`; // Change this to the default image source

  // Remove the hover effect class when the emoji is deselected
  const emojiDiv = document.getElementById(`emojidiv${imageNumber}`);
  emojiDiv.classList.remove("selected");
  imageElement.classList.remove(`img-selected`);

  // Reset the selectedEmoji variable
  selectedEmoji = 0;
}

function checkSubmitButton() {
  // Enable or disable the submit button based on whether an emoji is selected
  const btn = document.getElementById('sub-btn');
  
  if (selectedEmoji === 0) {
    btn.classList.remove('btn-selected');
    btn.disabled = true; // Disable the button
  } else {
    btn.classList.add('btn-selected');
    btn.disabled = false; // Enable the button
  }
}
