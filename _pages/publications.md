---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

<hr>

<h3 class="mt-4">Full Papers (Journal, Conference, and Symposium)</h3>

<div class="container">
  <div class="row">
    <div class="col-2 my-2">
      <img class="border rounded shadow img-fluid" src="/images/papers/arunkumar2022pmutracker.png" data-holder-rendered="true">
    </div>
    <div class="col-10 my-2">
      Anjana Arunkumar, Andrea Pinceti, Lalitha Sankar, and Chris Bryan.
      <b>PMU Tracker: A Visualization Platform for Epicentric Event Propagation Analysis in the Power Grid</b>
      <i> in press, accepted to IEEE Vis 2022</i>.
      <br/>
      <a class="link-danger" href="https://ieeexplore.ieee.org/abstract/document/9903279" target="_blank">DOI</a> | <a href="https://aarunku5.github.io/files/arunkumar2022pmutracker.pdf">Paper</a>
    </div>
    <div class="col-2 my-2">
      <img class="border rounded shadow img-fluid" src="/images/papers/arunkumar2022pmuvis.png" data-holder-rendered="true">
    </div>
    <div class="col-10 my-2">
      Anjana Arunkumar, Nitin Gupta, Andrea Pinceti, Lalitha Sankar, and Chris Bryan,
      <b>PMUVis: A Large Scale Platform to Assist Power System Operators in a Smart Grid</b>
      <i> IEEE Computer Graphics and Applications, 2022</i>.
      <br/>
      <a class="link-danger" href="https://ieeexplore.ieee.org/document/9765704" target="_blank">DOI</a> | <a href="https://aarunku5.github.io/files/arunkumar2022pmuvis.pdf">Paper</a>
    </div>
    <div class="col-2 my-2">
      <img class="border rounded shadow img-fluid" src="/images/papers/wang2022instructions.png" data-holder-rendered="true">
    </div>
    <div class="col-10 my-2">
      Yizhong Wang, Swaroop Mishra, Pegah Alipoormolabashi, Yeganeh Kordi, Amirreza Mirzaei, Anjana Arunkumar, and 35 others.
      <b>Benchmarking generalization via in-context instructions on 1,600+ language tasks</b>
      <i> in press, accepted to EMNLP 2022</i>.
      <br/>
      <a href="https://aarunku5.github.io/files/wang2022instructions.pdf">arXiv preprint</a>
    </div>    

  </div>
</div>

<hr>

<h3 class="mt-4">Workshop Papers, Short Papers, and Other</h3>

<div class="container">
  <div class="row">
    <div class="col-2 my-2">
      <img class="border rounded shadow img-fluid" src="/images/papers/arunkumar2022dsi-1.png" data-holder-rendered="true">
    </div>
    <div class="col-10 my-2">
      Anjana Arunkumar, Daniel Ortiz, and Arunkumar Madapusi.
      <b>Examining the Effect of Visual Redundancy on the Understanding of Visualizations in Procurement and Sourcing</b>
      <i> accepted to Decision Sciences Institute Annual Conference 2022</i>.
    </div>
    <div class="col-2 my-2">
      <img class="border rounded shadow img-fluid" src="/images/papers/arunkumar2022dsi-2.png" data-holder-rendered="true">
    </div>
    <div class="col-10 my-2">
      Anjana Arunkumar, Daniel Ortiz, and Arunkumar Madapusi.
      <b>Examining the Effect of Reconfiguration Interactions on the Understanding of Anomalies in Supply Chain Management</b>
      <i> accepted to Decision Sciences Institute Annual Conference 2022</i>.
      <br/>
    </div>
     <div class="col-2 my-2">
      <img class="border rounded shadow img-fluid" src="/images/papers/arunkumar2022mwdsi-1.png" data-holder-rendered="true">
    </div>
    <div class="col-10 my-2">
      Anjana Arunkumar, Daniel Ortiz, and Arunkumar Madapusi.
      <b>Evaluation of Visual Uncertainty Representations in Schedule Risk Analysis</b>
      <i> accepted to Decision Sciences Institute Annual Conference 2022</i>.
      <br/>
    </div>
      <div class="col-2 my-2">
      <img class="border rounded shadow img-fluid" src="/images/papers/arunkumar2022mwdsi-2.png" data-holder-rendered="true">
    </div>
    <div class="col-10 my-2">
      Anjana Arunkumar, Daniel Ortiz, and Arunkumar Madapusi.
      <b>Modelling the Complexity of Risk Centered Supply Chain Network Visualization</b>
      <i> accepted to Decision Sciences Institute Annual Conference 2022</i>.
      <br/>
    </div> 

  </div>
</div>

{% if author.googlescholar %}
  You can also find my articles on <u><a href="{{author.googlescholar}}">my Google Scholar profile</a>.</u>
{% endif %}

{% include base_path %}

{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}
