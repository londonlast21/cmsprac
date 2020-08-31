async function editFormHandler(event) {
    event.preventDefault();

    await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
          title,
          post_body
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
  }
  
  document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);