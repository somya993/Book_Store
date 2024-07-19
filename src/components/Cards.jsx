import React from 'react'

function Cards({ item }) {
  return (
    <>
        <div>
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure>
                    <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXjQ3BpzwbCnZY26wua72vPZQE2QWimjmzVQ&s"
                    alt="Books" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                    Books!
                    <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>Each book has a unique story!!</p>
                    <div className="card-actions justify-end">
                    <div className="badge badge-outline">Education</div>
                    <div className="badge badge-outline">Products</div>
                    </div>
                </div>
                </div> 
        </div>
    </>
    
  );
}

export default Cards