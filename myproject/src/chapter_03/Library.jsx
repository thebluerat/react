import React from "react";
import Book from "./Book";

function Library(props) {
    return (
        <div>
            <Book name = "처음 만난 고양이" numOfPage={300}></Book>
            <Book name = "처음 만난 호랑이" numOfPage={400}></Book>
            <Book name = "처음 만난 강아지" numOfPage={500}></Book>
        </div>
    )
}

export default Library;