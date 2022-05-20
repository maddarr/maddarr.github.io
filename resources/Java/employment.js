const job1 = document.getElementById('job1');
const job2 = document.getElementById('job2');
const job3 = document.getElementById('job3');
const job4 = document.getElementById('job4');
const job5 = document.getElementById('job5');
const job6 = document.getElementById('job6');

const one = document.getElementById('one');
let job1active = true;
let job2active = true;
let job3active = true;
let job4active = true;
let job5active = true;
let job6active = true;


function one1 () {
	if (!job1active) return;
	if (one.innerText == "") {
	one.innerText = 'While working this job I demonstrated and promoted safe driving methods, while consistently adhering to state traffic rules and regulations. I was also responsible for sorting postal flats, letters, packages and magazines based on addresses and names. Every day after sorting I loaded a mail truck or my personal vehicle by properly securing items to prevent damage during transportation and in a manner that was inline with the deliveries. At times I had to collect money for postage-due and COD fees and obtained signed receipts for registered, certified, and insured mail, usually with a hand operated scanning device to track items delivered.I also had to collect mail on the daily route, bringing in parcels from homes, businesses and area mailboxes. I also assisted team members and managers with tasks to maintain productivity and meet project milestones.'
	job2active = false;
	job3active = false;
	job4active = false;
	job5active = false;
	job6active = false;
} else {one.innerText = '';
	job1active = true;
	job2active = true;
	job3active = true;
	job4active = true;
	job5active = true;
	job6active = true; };
};

function one2 () {
	if (!job2active) return;
	if (one.innerText == "") {
	one.innerText = 'While working this job I Identified specific plants and developed strong understanding of unique life cycles to provide optimized care. I also maintained plants and lawns through proper pest control, fertilization and maintenance. The maintenance was done by assessing different fertilizer techniques with complex testing methods to help alleviate negative impacts such as denitrification in field applications. I also examined collected plant specimens to identify problems such as diseases and infections for the customer, then optimized their scheduled fix. It was also part of the position to Supervise locations to eliminate problems such as pests from lawns and gardens, including selecting chemicals, application methods, and schedules before they became a problem.'

	job1active = false;
	job3active = false;
	job4active = false;
	job5active = false;
	job6active = false;
}else {one.innerText = '';
job1active = true;
job2active = true;
job3active = true;
job4active = true;
job5active = true;
job6active = true; };
};
function one3 () {
	if (!job3active) return;
	if (one.innerText == "") {
	one.innerText = 'As a supervisor in this role I oversaw the day to day functions of the dispatch office and team both dirrectly reporting to me and the techs in the field that I was dispatching.It was my job to have all the routes for the different markets and cable install crews throughout Southern Louisiana organized and running on time. To do this I utilized the daily, weekly and annual reports to maximize all workflow. I used and worked with dispatch software and adjusted routes and job assignments throughout the day to accommodate added jobs and installs from Spectrum TV (we were contracted to them), because of this my team and I worked closely with Spectrum dispatchers and tech support. On top of the dispatch software used, I also had to constantly utilize the Microsoft Office Suite for all communications of reports, emails and such, and have become very efficient in it.'
	job2active = false;
	job1active = false;
	job4active = false;
	job5active = false;
	job6active = false;
}else {one.innerText = '';
job1active = true;
job2active = true;
job3active = true;
job4active = true;
job5active = true;
job6active = true; };
};
function one4 () {
	if (!job4active) return;
	if (one.innerText == "") {
	one.innerText = 'I was the Quality Control Supervisor with Level II certifications in Visual Testing and Penetrant Testing, it was my job to Inspect and oversee final inspection procedures to ensure the product matched job specifications.I Completed quality control and inspection sheets in accordance with Department Of Defense standards, inspected and tested raw materials and assemblies to prevent serious downstream errors within those standards. I was charged with reporting on non-conformance issues and documenting findings in forms that were sent to all parties involved with the build. I liaised between prefabrication, fabrication areas and engineering team members to resolve quality issues. I measured the dimensions of completed products to verify their compliance with the documented production specifications and witnessed processes and already completed   assemblies and major components that were already inspected by another QC in my team. I provided required documentation and certifications of compliance to meet customers needs and rejected non-compliant assembly and installations, documenting non-compliance with locations and  correct notation and configuration required based on related drawings, specifications, and plans.  I also took physical samples of products and conducted tests such as Destructive as well as the required Visual and Liquid Penetrant Testing to determine their quality.'
	job2active = false;
	job3active = false;
	job1active = false;
	job5active = false;
	job6active = false;
}else {one.innerText = '';
	job1active = true;
	job2active = true;
	job3active = true;
	job4active = true;
	job5active = true;
	job6active = true;
};
};
function one5 () {
	if (!job5active) return;
	if (one.innerText == "") {
	one.innerText = 'As a Department Supervisor in the garden department I provided excellent customer service, product knowledge and utilized my team in the most effective way possible.I ensured my team of associates kept the department was always running correctly, having it always instock, clean and always visible to the customer. As part of the loss prevention for the department I kept weekly audits and reports up do date and utilized them to keep the department ahead of the customers needs per seasonal requirements by always having an associate available and asking the question, "what can I help you build today". I also assisted other departments when required and allocated associates to help the store as a team. It was my duty to also created all Garden associate work schedules and task lists as well as making sure all associate training was up to date and encouraged growth.'
	job2active = false;
	job3active = false;
	job4active = false;
	job1active = false;
	job6active = false;
}else {one.innerText = '';
job1active = true;
job2active = true;
job3active = true;
job4active = true;
job5active = true;
job6active = true; };
};
function one6 () {
	if (!job6active) return;
	if (one.innerText == "") {
	one.innerText = 'Managed all Front End, Back End, Trade and Vault operationsProvided training to all associates withing my assigned Departments.Worked with Loss Prevention during Inventory to help ensure the store was documenting, counting and adhearing to all Standard Operational Proceedures.Ensured that each of the Departments under my assigment were up to company standards, in merchandise placement and sales techniques.Provided excellent customer service and experience to the store as a whole.Perfomed both opening and closing duties to the entire store when scheduled as the on duty manager.Utilized all reports, figures and available assets to produce the best sales, in stock levels and department appearance possible.Communicated with other stores to ensure my departments were never out of stock of key merchandise.'
	job2active = false;
	job3active = false;
	job4active = false;
	job5active = false;
	job1active = false;
}else {one.innerText = '';
job1active = true;
job2active = true;
job3active = true;
job4active = true;
job5active = true;
job6active = true; };
};




