import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState, useContext } from "react";
import RepoCard from "../Components/RepoCard";
import { Context } from "../Context/Context";
import axios from "axios";
import { useEffect } from "react";

const Home = () => {
    const [uid, setUid] = useState(null);
    const context = useContext(Context);

    const [userInfo, setUserInfo] = useState([]);
    const [projectData, setProjectData] = useState([]);
    const [userName, setUserName] = useState("");
    
    const fetchUserData = async() => {
        const userResponse = await axios.get(`https://api.github.com/users/${userName}`);
        const projectResponse = await axios.get(`https://api.github.com/users/${userName}/repos`);
        setUserInfo(userResponse.data);
        setProjectData(projectResponse.data);
    }
    
    const handleButtonClick = () => {
        fetchUserData();
        setUserName("");
    }

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            setUid(user.uid);
            context.setUser({email: user.email, uid: user.uid});
        } else {
            // User is signed out
            setUid(null);
        }
        });
    }, [context]);

    return(
        uid ? (
            <div>
                <div className="ml-[70px] mt-[30px] flex">
                    <input onChange={(e) => setUserName(e.target.value)} value={userName} type="text" className="rounded-l-lg p-2 border-t mr-0 border-b border-l text-gray-800 w-[300px] border-gray-200 bg-white" placeholder="Github userName" />
                    <button onClick={() => handleButtonClick()} className="px-8 rounded-r-lg bg-yellow-400 hover:bg-green-400 text-gray-800 font-bold p-2 border-yellow-500 border-t border-b border-r">Get User</button>
                </div>
                {userInfo.hasOwnProperty("login") ? (<section className='mx-[70px] mt-[30px] flex flex-col xl:flex-row gap-[50px] items-center justify-between xl:justify-between'>
                    <div className='flex flex-col w-[80vw] xl:w-[45vw] h-[150px] bg-gradient-to-r from-purple-300 to-pink-300 rounded-3xl px-[50px]'>
                        <div className='mt-[25px] flex flex-col gap-[10px]'>
                            <h2 className='text-xl font-bold'>{userInfo?.name}</h2>
                            <h2 className='text-xl font-bold'>{userInfo?.bio}</h2>
                            <h2 className='text-xl font-bold'>{userInfo?.location}</h2>
                        </div>
                    </div>
                    <div className='ml-[20vw] xl:ml-[0px] flex flex-row gap-[50px] w-screen xl:w-[35vw]'>
                    <div className='w-[35vw] xl:w-[25vw] mt-[-60px] h-[210px] bg-gradient-to-r from-purple-300 to-pink-300 rounded-3xl p-[20px]'>
                        <h3 className='text-xl font-semibold'>Public repos</h3>
                        <h2 className='mt-[15px] text-4xl font-bold'>{userInfo?.public_repos}</h2>
                    </div>
                    <div className='flex items-center justify-center w-[35vw] xl:w-[25vw] mt-[-60px] h-[210px] bg-gradient-to-r from-purple-300 to-pink-300 rounded-3xl p-[20px]'>
                        <img className="h-[11vw] rounded-lg" src={userInfo?.avatar_url} alt="" />
                    </div>
                    </div>
                </section>) : <div></div>}
                <section className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-[20px] mx-[70px] mt-[30px] mb-[100px] items-center justify-between'>
                    {projectData ? (projectData.map((project) => (
                        <RepoCard key={project.id} project={project} />
                    ))) :
                    (<h2>No projects for this user.</h2>)}
                </section>
            </div>
        ) : (
            <div className="w-screen h-[100vh] mt-[-30px] flex items-center justify-center">
                <h2 className="text-3xl font-bold">Please Sign In to continue.</h2>
            </div>
        )
    );
}

export default Home;