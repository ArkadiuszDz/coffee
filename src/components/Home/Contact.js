import React from 'react';
import Title from '../Globals/Title';

const Contact = () => {
  return (
    <section className="contact py-5">
      <Title title="contact us"/>
      <div className="row">
        <div className="col-10 col-sm-8 col-md-6 mx-auto">
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" className="form-control" name="name" id="name" placeholder="john smith"/>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" className="form-control" name="email" id="email" placeholder="john.smith@email.com"/>
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea name="description" id="description" className="form-control" rows="10" placeholder="Your description here..."></textarea>
            </div>
            <button type="submit" className="btn btn-yellow btn-block text-capitalize mx-auto mt-5">submit</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact;