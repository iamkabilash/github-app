const RepoCard = ({ project }) => {
    return(
        <a href={project.html_url} target="blank">
            <div className="card h-[120px] rounded-xl flex flex-col pt-[10px] justify-between px-[20px] transition-transform hover:scale-110 bg-red-100">
                <h2 className="text-xl font-semibold">{project.name}</h2>
            </div>
        </a>
    );
}

export default RepoCard;