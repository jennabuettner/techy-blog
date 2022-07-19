const submitComment = async (event) => {
    event.preventDefault();
    
    console.log("hello");
    
    const id = event.target.dataset.id;
    console.log(id);
    const advice = document.querySelector(`#commentInp${id}`).value.trim();
    console.log(comment);
    if (id) {
      const response = await fetch(`/api/posts/${id}`, {
        method: 'POST',
        body: JSON.stringify({ advice }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/posts');
      } else {
        alert('Failed to create project');
      }
    }
  }
  
  const btns = document.querySelectorAll('.commentBtn');
  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', submitComment)
  };