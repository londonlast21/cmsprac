async function deleteFormHandler(event) {
    event.preventDefault();

    const post_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
      ];

      const response = await fetch(`/api/posts/${post_id}`, {
          method: 'DELETE',
          headers: {
              'Content-Type': 'application/json'
          }

    })
                .then(dbPostData => {
                    if (!dbPostData) {
                        res.status(404).json({ message: 'No post found' });
                        return;
                    }
                
                    document.location.reload();
                })
                .catch(err => {
                    console.log(err);
                    
                });
               
        };
 



  
  document.querySelector('.delete-post-btn').addEventListener('click', deleteFormHandler);