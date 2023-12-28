import { useState } from "react";

function Home() {
    var [a, setA] = useState();
    var [b, setB] = useState();
    const [c, setC] = useState();

    const [news,setNews] = useState();


    function change(e) {
        setA(e.target.value)
        console.log(a)
    }
    function changeB(e) {
        setB(e.target.value)
    }

    function sum() {
        setC(parseInt(a) + parseInt(b))

    }


    function networkCall() {
        fetch('https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=51d5987fc08d4cd6a8de134921de48fa')
            .then(response => response.json())
            .then(json => setNews(json))
    }

    return (
        <>
            {/* <input onChange={change} type="number" placeholder="Enter a number" className="bg-black m-10 rounded-md text-white" />

            <input onChange={changeB} type="number" placeholder="Enter a number" className="bg-black m-10 rounded-md text-white" />



            <button onClick={sum}>
                Sum
            </button> */}
            {/* <p>

{c}
</p> */}
<button onClick={networkCall}>
    Call Now
</button>

<p>
    {
      news &&  news.articles.map((item,index)=>{
        return (
            <div>


                    {
                        item.title
                    }
            </div>
        )
      })
    }
</p>
        </>
    )

}


export default Home