function getAge(d1, d2) {
  d2 = d2 || new Date();
  var diff = d2.getTime() - d1.getTime();
  return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
}
const age = getAge(new Date(2000, 11, 8));

const profileData = {
  name: "Pattapon Janchoo",
  age: age,
  photo: "https://avatars.githubusercontent.com/u/53260091?v=4",
  position: "Software Developer",
  description:
    "Hi, I am a 3rd year computer engineering student at King Mongkut's Institute of Technology Ladkrabang. I am interested in software development and innovations that will make everything easier, and have experience in front-end and back-end development. I intended to develop my skills and learn something new every day from your company.",
  phone: "+6691-846-9519",
  email: "pattapon.pj@gmail.com",
  website: "pjpure.github.io",
  city: "Bangkok, Thailand",
};
export default profileData;
