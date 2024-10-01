const uri = "http://localhost:8080/";

export async function getPosts() {
  const res = await fetch(uri + "posts");
  return res.json().posts;
}

export function addPost(postData) {
  fetch(uri + "posts", {
    method: "POST",
    body: JSON.stringify(postData),
    headers: {
      "COntent-Type": "application/json",
    },
  });
}
