---
layout: civic-bs
---

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
