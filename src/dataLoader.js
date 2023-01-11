export  const data = async() =>{
    const coursesData = await fetch('https://10-server-assignment.vercel.app/courses')
    const courses = await coursesData.json();
    console.log(courses);
    return courses;
}