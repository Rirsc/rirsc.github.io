---
title: AI image generators
date: 2023-11-29
tags:
  - ai
  - design
  - image
  - comfyui
  - notes
---

Here comes another opinion on using or not these generators, but most importantly, on how we should take advantage of them. Nevertheless, I’m still struggling to create a solid opinion, so hopefully, this text helps position me better and clarify my thoughts.

First and sadly, I support the current overall rejection as **the main use is focused on lazy replicating rather than creating.**

The widespread use of these generators is horrendous in both ethical and aesthetic terms. Let’s go for the big ‘buts’.

<!-- READ MORE! -->

## The opposite of beautiful is careless

Aesthetically, much of what is spreading is unmotivated output from quick prompting and zero filter. These are adding little to level up the scene but quite the opposite. It is also extremely sad how professional illustrators are being replaced by managers who decided to get rid of them. They wear a shiny painter’s smock with zero care for the final output (even if they are, sometimes they cannot improve what they have created so they just ease the requirements). Quite the opposite of when they had a professional who they could guide, even if sometimes this is done in an incredibly unproductive and stressful way for the person crafting the output.

Nowadays, the major use is a vague replication of existing styles using models that have been trained on millions of images, a lot of them from artists who didn’t allow their art for such a purpose. One could disagree, mentioning that humans are constantly supporting their art in lots of references, and it’s what the models are doing.

Even if I agree with it, I think **it should be easy and obligatory to verify if any given image was used for training models and remove them if necessary**. Similarly, it should be clearer when Siren Servers are grabbing users’ input and [asking for their consent.](https://www.instagram.com/p/C34xFEpqSqK/?igsh=MWY3Zm9uNHRta3AxdQ%3D%3D)

Furthermore, we are already seeing a swift where big companies take the majority of the credit and artists with new ideas move aside.

But be sad no more, humans are still awesome and get tired easily of lame repetition, and that is where all magic happens.

## Human awesomeness

As humans, we get tired easily and we find this lazy outcome extremely boring in the short term.

The following ‘formula’ has been spread and it’s definitely how I think it should be:

**Humans + AI > AI > Humans**

Not only that but by just removing the human part in the process, the workflow led shortly into a vague and not appealing outcome. As clearly spotted in the following [video by Sabine Hossenfelder](https://www.youtube.com/watch?v=NcH7fHtqGYM) models training on their own output decrease incredibly their variety.

Also, as humans, we find particularly enjoyable the craftsman of things. The road is the destiny and all of that, you know what I mean.

Craft, craft, craft is what we want. And in a respectful way.


## It’s all about the output, therefore curate the input

In any art, the output should be the core element that holds everything. Don’t get me wrong, unleashing the story behind the work could be astounding, and sometimes is the essential of the piece (for instance, the astounding intervention by [Félix González-Torres: Bed Billboards](https://publicdelivery.org/gonzalez-torres-beds/) always gets me goosebumps) but that should be relegated to mostly modern art conversations.

Perfect parallelism is still music sampling. Crop from here and there, twist as much as the waves allow you to, and make a completely new track fully distinguished from the initial point (which, from the very start point, was a solid love and curated selection from the creator).

> All ideas can be atomized to unoriginal elements, it is how these elements are arranged, combined and transformed where originality is realized, and where ideas and identity become entangled—a relationship which is necessary for bringing them into reality.  
> — [David O'Reilly](https://sub.davidoreilly.com/p/imitation-i)

I can’t find the exact quote right now (or maybe I listened to it in a book release from him) but [Mauro Entrialgo](https://twitter.com/tyrexito?lang=en) said something like: **If you copy an artist, you are a thief. If you copy several artists, you will probably be part of an art movement. If you copy from tons and tons of artists of all types, after a while, you will have your style.**

That core mantra is how anyone should tackle any creation. Broad and curious approach to the wider amount of creation.

The vague use of what is provided only perpetuates the current state of human output, which is still full of racism, sexism and so on. So it’s important to never fully rely on the current systems or we will never improve further in. To that point, I quite like the thought of Yann Lecun. He observes that as a species, we are still in our infancy when it comes to utilizing these models.

Also, old ideas must die (similar to why immortality is a bad idea, apart from mine hehe, but that conversation is for another day).

## It can and must be used as a tool

As I am writing these words, I will reduce and categorise the workflows I know into these three approaches:

**1/ Use it as it is** — Open [Krea](https://www.krea.ai/home), Midjourney, or whatever app you found and start writing vague prompts. Extra points if you add established artists to the mix and perfectly canonised human styles. Obviously, this was irony; sorry but this is quite horrendous, unethical, lazy and barely adding any worthy rather than spending some time and learning the basic uses of it. This should be mostly for personal use, at most, and to get to know the apps.

**2/ Push the models** — Look for new outcomes that don’t rely heavily on other’s art. Use LORA’s and/or IPA’s with your personal art for mixing ideas and arriving at new places. Be honest, visually educate yourself and discard those images that are a wrap-up from another human style. [Boldtron](https://www.instagram.com/boldtron/?hl=en) approach is a good starting point as a reference. Personally, this has been my most used methodology so far. I use [ComfyUI](https://github.com/comfyanonymous/ComfyUI) with Stable Diffusion using some personal 3D renders as input and lots of trial and error.

<div class="grid-layout">
  <div class="column column-12">
  {{< video h264="/videos/posts/231129_ai image generators/2024-01-14-14-53-54.mp4" muted="true" class="video-margin" >}}
  </div>
  <div class="column column-6">
    <img src="/images/posts/231129_ai_image_generators/Fassbar_007-1024x1280.webp">
    <figcaption style="text-align: center; font-size: 0.875em; margin-top: 0.5em;">Input (personal 3D renders)</figcaption>
  </div>
  <div class="column column-6">
    <img src="/images/posts/231129_ai_image_generators/Blue-Spikes-01.webp">
    <figcaption style="text-align: center; font-size: 0.875em; margin-top: 0.5em;">Output</figcaption>
  </div>
</div>





**3/ Train your models** — There are already [‘clean’ models](https://huggingface.co/aipicasso/clean-diffusion-2-0-poc). They are made of public-domain images. Go further and add your own art to the mix. Use it as a little helper. This is the most ideal scenario as well as the most technically challenged. As always, [Chris](https://www.instagram.com/stories/highlights/18194394052224812/) is doing an incredible job and it’s the perfect example of an ethical and awesome approach to the use of AI as a tool. Role Model at its best :_). My baby steps here have been merely for training using some of my hand sketches:


<div class="grid-layout">
  <div class="column column-6">
    <img src="/images/posts/231129_ai_image_generators/Sketches-Training-1024x1024.webp">
    <figcaption style="text-align: center; font-size: 0.875em; margin-top: 0.5em;">Input (personal sketches)</figcaption>
    </div>
  <div class="column column-6">
    <img src="/images/posts/231129_ai_image_generators/Sketches-Training_Output.webp">
    <figcaption style="text-align: center; font-size: 0.875em; margin-top: 0.5em;">Output</figcaption>
  </div>
</div>

And another attempt, this time with some random 3D unused style frames I have:


<div class="grid-layout">
    <div class="column column-6">
        <img src="/images/posts/231129_ai_image_generators/3D-Training-1024x1024.webp" alt="3D Training Image">
        <figcaption style="text-align: center; font-size: 0.875em; margin-top: 0.5em;">Input (personal 3D Render)</figcaption>
    </div>
    <div class="column column-6">
        <img src="/images/posts/231129_ai_image_generators/3D-Training_Output.webp" alt="3D Training Output">
        <figcaption style="text-align: center; font-size: 0.875em; margin-top: 0.5em;">Output</figcaption>
    </div>
</div>


Quite far away from a polished output, yet I find some of them appealing as they look from a different realm.

Definitely the most powerful approach as you can fine-tune and obtain exactly what you have in mind, fairly similar to any other tool.

## Don’t hate the tech

So yeah, with all that said, please enjoy the imagery on this site. The vast majority has been done using 3D packages, but some have been generated with the help of AI models. So far only as a personal exploration and are only spread into the LAB section of this site.