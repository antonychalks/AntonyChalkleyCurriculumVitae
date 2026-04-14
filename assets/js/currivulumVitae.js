document.addEventListener("DOMContentLoaded", function () {
    const timelineItems = document.getElementsByClassName("timeline-item");
    const experienceExpanded = document.getElementById("experience-expanded");
    const timelineExpandedItems = document.getElementsByClassName("timeline-expanded-item");
    const mySkillsDiv = document.getElementById("my_skills");

    let hideTimer = null;
    let isClicked = false;

    function hideAllExpanded() {
        for (let j = 0; j < timelineExpandedItems.length; j++) {
            timelineExpandedItems[j].classList.add("d-none");
        }
        experienceExpanded.classList.add("d-none");

    }

    function cancelHide() {
        if (hideTimer) {
            clearTimeout(hideTimer);
            hideTimer = null;
        }
    }

    for (let i = 0; i < timelineItems.length; i++) {

        timelineItems[i].addEventListener("mouseenter", function () {
            if(isClicked){
                return;
            } else {
                cancelHide();
                hideAllExpanded();

                const job = timelineItems[i].dataset.job;
                const expandedItem = document.querySelector(`.timeline-expanded-item[data-job="${job}"]`);

                mySkillsDiv.classList.add("d-none");
                experienceExpanded.classList.remove("d-none");

                if (expandedItem) {
                    expandedItem.classList.remove("d-none");
                }
            }
        });

        timelineItems[i].addEventListener("mouseleave", function () {
            if(isClicked){
                return;
            } else {
                cancelHide();
                hideTimer = setTimeout(function () {
                    hideAllExpanded();
                }, 250); // wait 250ms before hiding

            }
        });

        timelineItems[i].addEventListener("click", function () {
            if (isClicked) {
                console.log("Is Clicked");
                if(timelineItems[i].classList.contains("expanded")) {
                    timelineItems[i].classList.remove("expanded");
                    isClicked = false;
                    mySkillsDiv.classList.remove("d-none");
                    experienceExpanded.classList.add("d-none");
                    hideAllExpanded();
                } else {
                    cancelHide();
                    hideAllExpanded();
                    const job = timelineItems[i].dataset.job;
                    const expandedItem = document.querySelector(`.timeline-expanded-item[data-job="${job}"]`);
                    let expanded = document.querySelector(".expanded");
                    expanded.classList.remove("expanded");

                    mySkillsDiv.classList.add("d-none");
                    experienceExpanded.classList.remove("d-none");

                    if (expandedItem) {
                        expandedItem.classList.remove("d-none");
                        timelineItems[i].classList.add("expanded");
                    }
                }
            } else {
                cancelHide();
                hideAllExpanded();
                const job = timelineItems[i].dataset.job;
                const expandedItem = document.querySelector(`.timeline-expanded-item[data-job="${job}"]`);

                mySkillsDiv.classList.add("d-none");
                experienceExpanded.classList.remove("d-none");

                if (expandedItem) {
                    expandedItem.classList.remove("d-none");
                    timelineItems[i].classList.add("expanded");
                }

                isClicked = true;
            }

        })
    }

    for (let i = 0; i < timelineExpandedItems.length; i++) {
        timelineExpandedItems[i].addEventListener("mouseenter", function () {
            cancelHide();
        });

        timelineExpandedItems[i].addEventListener("mouseleave", function () {
            if(isClicked){
                return;
            } else {
                experienceExpanded.classList.add("d-none");
                mySkillsDiv.classList.remove("d-none");
                cancelHide();
                hideTimer = setTimeout(function () {
                    hideAllExpanded();
                }, 250);
            }
        });
    }

});