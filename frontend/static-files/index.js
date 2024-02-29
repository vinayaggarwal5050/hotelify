console.log("hello")
const welcomeDivEl =  document.getElementById("welcomeDiv");
console.log(welcomeDivEl);

const readFormData = () => {
  const formData = {
      checkin_date: document.getElementById('checkin_date').value,
      checkout_date: document.getElementById('checkout_date').value,
      adults_count: document.getElementById('adults_count').value,
      children_count: document.getElementById('children_count').value
    };

    // You can now use the formData object as needed.
    console.log(formData);

    fetch("https://httpdump.app/dumps/166018ce-cb33-4138-a09b-f4d3fa41dfad", {
      method: "post",
      headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer 8767656ghfhgfhg`
      },
  
      body: JSON.stringify({
        title: "some title...",
        description: "some description..."
      })
    })
    .then(res => res.JSON())
    .then(jsonRes => console.log(jsonRes));
    
    return false;
}