export function PostData(type, userData){

    let BaseURL = "https://fierce-oasis-98286.herokuapp.com/users";

    return new Promise((resolve, reject) => {
       fetch(BaseURL+type,{
         method: 'POST',
         mode:'no-cors',
         body: JSON.stringify(userData)
       })
       .then((response) => response.json())
       .then((responseJson) => {
         resolve(responseJson);
       })
       .catch((error) => {
         reject(error);
       });
  });
}
