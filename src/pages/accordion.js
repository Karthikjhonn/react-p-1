import React from "react";

function Accordion(props){
    return(
        <section> 
        <p class="btn btn-white text-black w-100 fw-bold text-lg-start text-center " data-bs-toggle="collapse" data-bs-target={props.idtarget} role="button" aria-expanded="false" aria-controls="collapseExample">{props.title}<span className="text-muted fw-bold"> (23)</span></p>
        <div class="collapse text-center text-lg-start " id={props.id}>
        <a href="#" className="text-decoration-none text-dark "><pre class="border-bottom text-capitalize py-2 ps-4 hover">{props.items} <span className="text-muted fw-normal">(23)</span></pre></a>
        <a href="#" className="text-decoration-none text-dark"><pre class="border-bottom text-capitalize py-2 ps-4 hover">{props.items} <span className="text-muted fw-normal">(23)</span></pre></a>
        <a href="#" className="text-decoration-none text-dark"><pre class="border-bottom text-capitalize py-2 ps-4 hover">{props.items} <span className="text-muted fw-normal">(23)</span></pre></a>
        <a href="#" className="text-decoration-none text-dark"><pre class="border-bottom text-capitalize py-2 ps-4 hover">{props.items} <span className="text-muted fw-normal">(23)</span></pre></a>
        <a href="#" className="text-decoration-none text-dark"><pre class="border-bottom text-capitalize py-2 ps-4 hover">{props.items} <span className="text-muted fw-normal">(23)</span></pre></a>
        <a href="#" className="text-decoration-none text-dark"><pre class="border-bottom text-capitalize py-2 ps-4 hover">{props.items} <span className="text-muted fw-normal">(23)</span></pre></a>
        </div>
        </section>
    )
}

export default Accordion