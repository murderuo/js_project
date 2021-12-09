// export function getUserId(userId) {
//   //   console.log(userId);
//   getData(userId);
// }
import axios from 'axios';

async function getData(user_id) {
  const { data: userInfo } = await axios(
    'https://jsonplaceholder.typicode.com/users/' + user_id,
  );
  const { data: userPosts } = await axios(
    'https://jsonplaceholder.typicode.com/posts?userId=' + user_id,
  );

  console.log('user info: ', userInfo);
  console.log('user posts: ', userPosts);
}

export default getData;
