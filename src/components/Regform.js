import react from 'react';
import image from './image.png'
import picture from './picture.png'
import { useState, useEffect } from 'react';
export default function ReghtmlForm() {
    const [display, setdisplay] = useState(false);
    const [Mydata, setMydata] = useState([]);
    const [Gender, setGender] = useState("");
    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [Skills, setSkills] = useState([]);
    const [Imagelink, setImagelink] = useState("");
    const [Website, setWebsite] = useState("");
    const Submit = (e) => {
        e.preventDefault();
        const savedMydata = { Name, Email, Website, Imagelink, Gender, Skills }
        const getMydata = [savedMydata, ...Mydata]
        localStorage.setItem("Mydata", JSON.stringify(getMydata));
        setMydata(getMydata);
        //setMydata([])

    };
    useEffect(() => {
        const savedMydata = JSON.parse(localStorage.getItem("Mydata"));
        setMydata(savedMydata)
        //setMydata([])

    });
    const clearform = () => {
        setMydata([])
        setEmail("")
        setGender("")
        setImagelink("")
        setWebsite("")
        setSkills("")
        setName("")
            ;
    }


    return (

        <>
            <h5 className='form-head'>Please fill the required form to reg yourself</h5>
            <form className="form" onSubmit={Submit}>
                <div className="mb-4">
                    <label htmlFor="Name" className="namelabel">Name</label>
                    <input type="text" placeholder="Enter your name" size="45" className="name" name="N"
                        value={Name} onChange={(e) => setName(e.target.value)} />


                </div>
                <div className="mb-4">
                    <label htmlFor="Email" className="emaillabel">Email Address</label>
                    <input type="email" placeholder="Enter your Email" size="45" className="email" name="E" value={Email}
                        onChange={(e) => setEmail(e.target.value)} />

                </div>
                <div className="mb-4">
                    <label htmlFor="Website" className="Websitelabel">Website</label>
                    <input type="text" placeholder="Enter your website link" size="45" className="website" name="W" value={Website}
                        onChange={(e) => setWebsite(e.target.value)} />

                </div>
                <div className="mb-4">
                    <label htmlFor="Imagelink" className="Imagelinklabel">Image link</label>
                    <input type="text" placeholder="Enter your image link" size="45" className="imagelink" name="I" value={Imagelink}
                        onChange={(e) => setImagelink(e.target.value)} />
                </div>
                <div className="mb-4">
                    <label htmlFor="Gender" className="Genderlabel">Gender</label>
                    <input type="text" className="gender" placeholder="Enter your Gender" size="45" name="G" value={Gender} onChange={(e) => setGender(e.target.value)} />
                </div>
                <div className="mb-4">
                    <label htmlfor="skills" className="skills">Skills</label>
                    <input type="checkbox" id="ht" value="Php" checked={Skills.includes('Html')}
                        onChange={(e) => {
                            if (e.target.checked) {
                                setSkills(['Html', ...Skills]);
                            } else {
                                setSkills(Skills.filter(choose => choose !== 'Html'));
                            }
                        }} />
                    <label className="ht">Html</label>
                    <input type="checkbox" id="cs" value="CSS" checked={Skills.includes('CSS')}
                        onChange={(e) => {
                            if (e.target.checked) {
                                setSkills(['CSS', ...Skills]);
                            } else {
                                setSkills(Skills.filter(choose => choose !== 'CSS'));
                            }
                        }} />
                    <label className="cs">CSS</label>
                    <input type="checkbox" id="py" value="Python" checked={Skills.includes('Python')}
                        onChange={(e) => {
                            if (e.target.checked) {
                                setSkills(['Python', ...Skills]);
                            } else {
                                setSkills(Skills.filter(choose => choose !== 'Python'));
                            }
                        }} />
                    <label className="p">Python</label>
                    <input type="checkbox" id="javs" value="JavaScript" checked={Skills.includes('JavaScript')} onChange={(e) => {
                        if (e.target.checked) {
                            setSkills(['JavaScript', ...Skills]);
                        } else {
                            setSkills(Skills.filter(choose => choose !== 'JavaScript'));
                        }
                    }} />
                    <label className="j">JavaScript</label>
                    <input type="checkbox" id="Php" value="Php" checked={Skills.includes('Php')}
                        onChange={(e) => {
                            if (e.target.checked) {
                                setSkills(['Php', ...Skills]);
                            } else {
                                setSkills(Skills.filter(choose => choose !== 'Php'));
                            }
                        }} />
                    <label className="ph">Php</label>

                </div>
                <button type="submit" className="btn btn-dark">Enroll Student</button>
                <button type="reset" className='btn btn-dark' id="bt" onClick={clearform} >Clear</button>
            </form>
            <div className='display'>
                {Mydata.map((reg, i) => (
                    <div className={Mydata ? "data" : "none"} key={i}>
                        <h2 className='desc'><b>Description</b></h2>
                        <h2 className="profile"><b>Image</b></h2>
                        <h4><b>Name: {reg.Name}</b></h4>
                        <h4>Email: {reg.Email}</h4>
                        <h4>Gender: {reg.Gender}</h4>
                        <h4>Website: <u className='under'>{reg.Website}</u> </h4>
                        <h4>Skills: {reg.Skills}</h4>
                        <img className='image' src={reg.Imagelink}></img><hr className='hl'></hr>
                    </div>
                ))}
            </div>


        </>

    )
}
