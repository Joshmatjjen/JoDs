/**
 * Created by Created by Joshmat 10/1/2020.
 */

const template = (context) => {
  return new Promise((resolve) => {
    resolve(`
      <h5 class="card-title">Welcome to JoD Symptom Checker</h5>
      <div class="card-text">
        <p>Created to help patients decide whether their symptoms require a consultation with a doctor or other health professional or can be dealt with by self-care</p>
        <p>Symptom checkers can not only be the beneficial tools for doctors but also provide the access to health care in low resource settings such as in rural areas or developing countries.</p>
        <p>Visit our <i class="fa fa-github"></i> <a href="https://github.com/Joshmatjjen/JoDs">GitHub page</a> to grab the source code of this example as well as a guide on how to start working with it.</p>
        <p>Please click <span class="badge badge-primary">Next</span> to move to the first question.</p>
      </div>
    `);
  });
};

export default template;
