import axios from "axios"

export default async function getData (userId){
  const [user, post] = await Promise.all([axios.get("https://jsonplaceholder.typicode.com/users/" + userId), axios.get("https://jsonplaceholder.typicode.com/posts?userId=" + userId)])
  const result = {  posts: post.data, ...user.data}
  console.log(result)
}

















































// export default async function getData (userId){
//   try {
//     const values = await Promise.all([axios.get('https://jsonplaceholder.typicode.com/users/' + userId), axios.get('https://jsonplaceholder.typicode.com/posts?userId=' + userId)])
//     const result = { ...values[0].data, ...values[1].data }
//     console.log(result)
//   } catch (error) {
//     console.log(error.message)
//     return null
//   }
// }
