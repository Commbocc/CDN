---
layout: civic-bs
---

<div class="page-header top">
	<img src="http://hillsboroughcounty.org/images/pages/N3803/updatewomentechbanner.gif" alt="Women In Tech" class="img-responsive center-block">
</div>

In recognition of Women's History month, Hillsborough County Economic Development hosted a free Women in Tech seminar. The event for adults and children was part of a collaborative effort to highlight, teach, and inspire young women to pursue careers in technology through shared connections and resources.

Participants enjoyed networking and learned about development of web programming, gaming, apps and robotics from I-T and engineering experts

Since 2010, Science, Technology, Engineering and Math (STEM) jobs have grown 50 percent faster in Hillsborough County compared to national workforce data.

There are already more than 36,000 jobs here locally identified in STEM related fields, and women make up more than 25 percent of that workforce.

By 2024, STEM related jobs are projected to grow by 17 percent. event is part of a collaborative effort to highlight, teach, and inspire young women to pursue careers in technology through shared connections and resources. Join us for a local learning opportunity to highlight, teach, and inspire through shared connections and resources.

{% include _partial_video.html youtube="ay-SbdDZquY" endvideo="_" %}

{% for pres in site.data.women_in_tech %}

### {{ pres.heading }}

{{pres.description}}

{% for speaker in pres.speakers %}
<div class="media">
  <div class="media-left">
    <a href="#">
      <img class="media-object" src="{{ speaker.image_src }}" alt="{{ speaker.name }}" width="96">
    </a>
  </div>
  <div class="media-body">
    <h4 class="media-heading">{{ speaker.name }}</h4>
	 {{speaker.bio}}
  </div>
</div>
{% endfor %}

{% endfor %}
