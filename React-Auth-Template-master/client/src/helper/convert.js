/** image onto base64 */
export default function convertToBase64(file) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader(); // File Reader API
    fileReader.readAsDataURL(file); // read file as data url

    fileReader.onload = () => {
      resolve(fileReader.result); // return base64
    };

    fileReader.onerror = (error) => {
      reject(error); // return error
    };
  });
}
