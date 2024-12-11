// REFERENCES: https://api.jquery.com/filter/
// https://api.jquery.com/each/
// https://api.jquery.com/jQuery.map/
// https://api.jquery.com/addClass/
// https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation



// FILTER FUNCTION
$(document).ready(function() { 
    var selectedTags = []; 
  
    $('.gallery-card-tag').on('click', function() { 
        event.preventDefault(); // prevent navigation 
      
        var selectedTag = $(this).text().trim(); 
  
      if (selectedTags.includes(selectedTag)) {
        selectedTags = selectedTags.filter(function(tag) { // .filter() makes a new array...
          return tag !== selectedTag; // with tags in selectedTags that aren't the selectedTag
        });

        $(`.gallery-card-tag:contains(${selectedTag})`).removeClass('selected');

      } else {
        selectedTags.push(selectedTag); 
        $(`.gallery-card-tag:contains(${selectedTag})`).addClass('selected');
      }
  
      updateSelectedTagsDisplay();
      filterProjectsByTags();
    });
  
    function updateSelectedTagsDisplay() { // update the #selected-tags span
    
        $('#selected-tags-container').empty(); 

        if (selectedTags.length > 0) {
            selectedTags.forEach(function(tag) {
                // create tag element for each element in selectedTags
                var tagElement = $('<span>')
                    .addClass('gallery-card-tag selected')
                    .text(tag)
                    .append(`<img src="./images/x.png" alt="remove tag" class="remove-icon">`)
                    .on('click', function() { 
                        unselectTag(tag); 
                    });
                    
                $('#selected-tags-container').append(tagElement); 
            });
        }
    }
  
    function filterProjectsByTags() {
      $('.gallery-card').each(function() { // for every card...
        var tags = $(this).find('.gallery-card-tag').map(function() {
          return $(this).text().trim(); // get all tags for the current project card
        }).get(); // convert jQuery array into js array
  
        var showCard = selectedTags.every(function(tag) { // check if the project has all selected tags
          return tags.includes(tag);
        });

        if (showCard || selectedTags.length === 0) { // if showCard==true or there are no selected tags
          $(this).show(); 
        } else {
          $(this).hide(); 
        }
        
      });

    }

    function unselectTag(tag) {
        selectedTags = selectedTags.filter(function(selected) {
            return selected !== tag; 
        });

        $(`.gallery-card-tag:contains(${tag})`).removeClass('selected'); // remove selected class globally
        updateSelectedTagsDisplay();
        filterProjectsByTags();
    }
  
    // "show all" button
    $('#show-all').on('click', function() {
      selectedTags = [];
      updateSelectedTagsDisplay();
      $('.gallery-card').show();
      $('.gallery-card-tag.selected').removeClass('selected');
    });
  });


// APPEAR ON SCROLL
ScrollReveal().reveal('.scroll', { delay: 100});