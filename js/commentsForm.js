
const supabaseUrl = 'https://illmempxufvaorktftsr.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlsbG1lbXB4dWZ2YW9ya3RmdHNyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI3MzY2NjAsImV4cCI6MjA0ODMxMjY2MH0.QrC6f-duanPJCh80GHPTv3FlRMZDIUkdU-eNnvuspgY';
const supabase1 = supabase.createClient(supabaseUrl, supabaseKey);

// console.log('Supabase initialized:', supabase1);
document.addEventListener("DOMContentLoaded", () => {
  const commentForm = document.getElementById("commentForm");
  const commentInput = document.getElementById("commentInput");
  const firstNameInput = document.getElementById("firstName");
  const photoUpload = document.getElementById("photoUpload");
  const commentListContainer = document.getElementById("commentList");
  const hiddenTourId = document.getElementById("hiddenTourId");

  // Load comments
  async function loadReviews(tourId) {
    console.log(tourId )
    const { data, error } = await supabase1
      .from('comments')
      .select('*')
      .eq('tourId', tourId);

    if (error) {
      console.error('Error loading comments:', error);
      return;
    }
    console.log(data)
    commentListContainer.innerHTML = ""; 

    if (data.length > 0) {
      data.forEach(comment => {
        const newComment = createCommentElement(comment.name, comment.text, comment.photo);
        commentListContainer.appendChild(newComment);
      });
    } else {
      commentListContainer.innerHTML = "<li>No comments yet.</li>";
    }
  }

  // Save comments to database
  async function saveReview(tourId, name, text, photoUrl) {
    const { data, error } = await supabase1
      .from('comments')
      .insert([{ tourId, name, text, photo: photoUrl }]);

    if (error) {
      console.error('Error saving comment:', error);
      return;
    }

    const newComment = createCommentElement(name, text, photoUrl);
    commentListContainer.appendChild(newComment);
  }

  // Create comment
  function createCommentElement(name, text, photoUrl) {
    const newComment = document.createElement("li");
    newComment.classList.add("mb-3");

    const userIcon = document.createElement("i");
    userIcon.classList.add("bi", "bi-person");
    userIcon.style.fontSize = "17px";
    userIcon.style.color = "#007bff";
    userIcon.style.marginRight = "5px";

    const nameText = document.createElement("strong");
    nameText.textContent = name;

    const commentParagraph = document.createElement("p");
    commentParagraph.textContent = text;
    commentParagraph.classList.add("mx-4");

    newComment.appendChild(document.createElement("hr"));
    newComment.appendChild(userIcon);
    newComment.appendChild(nameText);
    newComment.appendChild(document.createElement("br"));
    newComment.appendChild(commentParagraph);

    if (photoUrl) {
      const photo = document.createElement("img");
      photo.src = photoUrl;
      photo.alt = "Uploaded photo";
      photo.style.maxWidth = "100px";
      photo.style.marginTop = "10px";
      photo.classList.add("mx-4");
      newComment.appendChild(photo);
    }

    return newComment;
  }

  // Post a comment
  commentForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const tourId = hiddenTourId.value;
    const firstName = firstNameInput.value.trim();
    const commentText = commentInput.value.trim();

    if (!firstName || !commentText) {
      const alertPlaceholder = document.getElementById('liveAlertPlaceholder2');
      showAlert('Fill all fields please.',  'danger', 3000, alertPlaceholder) ;
      return;
    }

    const photoFile = photoUpload.files[0];
    let photoUrl = "";

    if (photoFile) {
      const reader = new FileReader();
      reader.onload = async (event) => {
        photoUrl = event.target.result;
        await saveReview(tourId, firstName, commentText, photoUrl);
      };
      reader.readAsDataURL(photoFile);
    } else {
      await saveReview(tourId, firstName, commentText, photoUrl);
    }

    commentForm.reset();
    const alertPlaceholder = document.getElementById('liveAlertPlaceholder2');
    showAlert('Thank you for your feedback!', 'success', 5000, alertPlaceholder);
  });

  document.querySelectorAll(".openComments").forEach((button) => {
    button.addEventListener("click", async () => {
      const tourId = button.dataset.tourId;
      hiddenTourId.value = tourId;
      await loadReviews(tourId);
    });
  });
});
