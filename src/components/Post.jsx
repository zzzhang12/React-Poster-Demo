const names = ['Zhang', 'Ying']

function Post(){
    const chosenName = Math.random() > 0.5 ? names[0] : names[1]

    return(
        <div>
            <p>{chosenName}</p>
            <p>Hello World!</p>
        </div>
    );
}

export default Post;