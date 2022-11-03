---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

##Full Papers (Journal, Conference, and Symposium)

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

  </div>
</div>

##Workshop Papers, Short Papers, and Other



{% if author.googlescholar %}
  You can also find my articles on <u><a href="{{author.googlescholar}}">my Google Scholar profile</a>.</u>
{% endif %}

{% include base_path %}

{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}
