import React from "react";
import dev_details from "../developer_details";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
function Meetdev(){
    return (
        <div className="bg-[url('../src/images/img-bg.jpg')]">
            <p className="mb-6 p-6 leading-13 text-left text-4xl md:text-6xl font-serif text-white bg-gradient-to-r from-red-600 to-pink-800">Meet The Developers</p>
            <div className="text-white md:grid grid-cols-3 p-10">
                {dev_details.map((ele)=>(
                    <Card img_url={ele.img_url} name={ele.name} insta_id={ele.insta_id} linkedin_id={ele.linkedin_id} contact={ele.contact} portfolio={ele.portfolio} />
                ))}
            </div>
        </div>
    )
}
function Card(props){
    return (
        <div className="bg-gradient-to-r from-red-800 to-pink-800 align-middle m-7">
            <div className="m-auto width-full text-center"><img className="dev-img h-auto m-auto p-3 w-1/2" src={props.img_url} alt="img" /></div>
            <div className="text-center font-semibold text-2xl"><p>{props.name}</p></div>
            <div className="p-3 grid grid-cols-4">
                <a className="p-2 m-auto text-2xl" href={props.insta_id}><FaInstagram /></a>
                <a className="p-2 m-auto text-2xl" href={props.linkedin_id}><FaLinkedin></FaLinkedin></a>
                <a className="p-2 m-auto text-2xl" href={props.contact}><FaPhoneAlt/></a>
                <a className="p-2 m-auto text-2xl" href={props.portfolio}><FaExternalLinkAlt /></a>
            </div>
        </div>
    )
}
export default Meetdev