import React from 'react';
import { Link } from 'gatsby';
import Title from '../Globals/Title';

export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="our story"></Title>
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Sed sed nisi sit amet elit vulputate posuere. Mauris ultricies diam non malesuada laoreet. 
              Nulla sit amet ipsum eu odio scelerisque pharetra eget bibendum urna. Etiam est eros, iaculis quis sapien nec, molestie tincidunt diam. 
              Maecenas dui elit, euismod vel nisi maximus, tristique euismod augue. Integer nec augue luctus, pretium leo ac, iaculis nisi.
            </p>
            <Link to="/about">
              <button className="btn text-uppercase btn-yellow">about page</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}