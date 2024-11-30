// REFERENCES: https://api.jquery.com/filter/
// https://api.jquery.com/each/
// https://api.jquery.com/jQuery.map/



$(document).ready(function() { // .ready is when the DOM is fully loaded
    var selectedTags = []; // array to keep track of selected tags
  
    $('.gallery-card-tag').on('click', function() { // listen for clicks on the tag elements
      var selectedTag = $(this).text().trim(); // retrieve the clicked tag text without white spaces
  
      if (selectedTags.includes(selectedTag)) { // if the tag is selected...
        selectedTags = selectedTags.filter(function(tag) { // .filter() makes a new array...
          return tag !== selectedTag; // with tags in selectedTags that aren't the selectedTag
        });
      } else {
        selectedTags.push(selectedTag); // if the tag isn't in selectedTags, add it
      }
  
      updateSelectedTagsDisplay();
  
      // Filter the projects based on the selected tags
      filterProjectsByTags();
    });
  
    function updateSelectedTagsDisplay() { // update the #selected-tags span with the current selected tags
    //   if (selectedTags.length > 0) {
    //     $('#selected-tags').text(selectedTags.join(', ')); // set the text contents
    //   } else {
    //     $('#selected-tags').text('None');
    //   }
    
        $('#selected-tags-container').empty(); // clear existing selected tags from the html container

        if (selectedTags.length > 0) {
            selectedTags.forEach(function(tag) {
                // Create a tag element with the same visual style
                var tagElement = $('<span>')
                    .addClass('gallery-card-tag selected')
                    .text(tag);

                $('#selected-tags-container').append(tagElement); // Append the tag to the container
            });
        } else {
            $('#selected-tags-container').text('None'); // If no tags are selected
        }
    }
  
    function filterProjectsByTags() {
      $('.gallery-card').each(function() { // for every card...
        var tags = $(this).find('.gallery-card-tag').map(function() {
          return $(this).text().trim(); // get all tags for the current project card
        }).get(); // convert jQuery array into js array
  
        var showCard = selectedTags.every(function(tag) { // check if the project has all selected tags
          return tags.includes(tag); // the project must have all selected tags
        });
  
        if (showCard || selectedTags.length === 0) { // if showCard is true or there are no selected tags
          $(this).show(); // show the card
        } else {
          $(this).hide(); // hide the card
        }
      });
    }
  
    // "show all" button
    $('#show-all').on('click', function() {
      selectedTags = [];
      updateSelectedTagsDisplay();
      $('.gallery-card').show();
      $('.gallery-card-tag.selected').removeClass('selected');
    });


    // toggle selected or not:
    $(".gallery-card-tag").on("click", function () {
        const tagClass = $(this).attr("class").split(" ").find(cls => cls !== "gallery-card-tag" && cls.endsWith("-tag")); // gets the class tag
        
        const isSelected = $(`.${tagClass}`).hasClass("selected");
        console.log(isSelected)

        if (isSelected) {
            $(`.${tagClass}`).removeClass("selected");
        } else {
            $(`.${tagClass}`).addClass("selected");
        }
        
    });
  });