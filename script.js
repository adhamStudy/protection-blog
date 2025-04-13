document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.getElementById('menu-toggle');
    const mainMenu = document.getElementById('main-menu');
    
    menuToggle.addEventListener('click', function() {
        mainMenu.classList.toggle('show');
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (mainMenu.classList.contains('show')) {
                    mainMenu.classList.remove('show');
                }
            }
        });
    });
    
    // Read more button functionality
    const readMoreBtn = document.querySelector('.read-more-btn');
    const expandableContent = document.querySelector('.expandable-content');
    
    if (readMoreBtn && expandableContent) {
        readMoreBtn.addEventListener('click', function() {
            expandableContent.classList.toggle('expanded');
            
            if (expandableContent.classList.contains('expanded')) {
                readMoreBtn.textContent = 'Read Less';
                expandableContent.style.height = expandableContent.scrollHeight + 'px';
            } else {
                readMoreBtn.textContent = 'Read More';
                expandableContent.style.height = '0';
            }
        });
    }
    
    // Accordion functionality
    const accordionItems = document.querySelectorAll('.accordion-item');
    
    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        
        header.addEventListener('click', function() {
            // Close all other accordion items
            accordionItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
        });
    });
    
    // Safety Assessment Modal
    const safetyCheckBtn = document.getElementById('safety-check-btn');
    const assessmentModal = document.getElementById('safety-assessment');
    const closeBtn = document.querySelector('.close');
    
    if (safetyCheckBtn && assessmentModal) {
        safetyCheckBtn.addEventListener('click', function() {
            assessmentModal.style.display = 'block';
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        });
        
        closeBtn.addEventListener('click', function() {
            assessmentModal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Re-enable scrolling
        });
        
        // Close modal when clicking outside the content
        window.addEventListener('click', function(e) {
            if (e.target === assessmentModal) {
                assessmentModal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }
    
    // Assessment form submission
    const assessmentForm = document.getElementById('assessment-form');
    const assessmentResults = document.getElementById('assessment-results');
    
    if (assessmentForm) {
        assessmentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form responses
            const q1 = document.querySelector('input[name="q1"]:checked')?.value;
            const q2 = document.querySelector('input[name="q2"]:checked')?.value;
            const q3 = document.querySelector('input[name="q3"]:checked')?.value;
            const q4 = document.querySelector('input[name="q4"]:checked')?.value;
            const q5 = document.querySelector('input[name="q5"]:checked')?.value;
            
            // Count 'yes' answers
            const yesCount = [q1, q2, q3, q4, q5].filter(answer => answer === 'yes').length;
            
            // Generate result message
            let resultMessage = '';
            let resultClass = '';
            
            if (yesCount === 5) {
                resultMessage = '<h3>Excellent! 5/5</h3><p>You're taking great steps to stay safe online. Keep up the good work and continue to stay informed about new safety measures.</p>';
                resultClass = 'success-result';
            } else if (yesCount >= 3) {
                resultMessage = `<h3>Good progress! ${yesCount}/5</h3><p>You're on the right track with your online safety practices. Check out our resources to learn about the areas where you answered "No".</p>`;
                resultClass = 'warning-result';
            } else {
                resultMessage = `<h3>Time to strengthen your defenses! ${yesCount}/5</h3><p>Your online safety could use some improvement. Don't worry - we have resources to help you protect yourself better.</p>`;
                resultClass = 'danger-result';
            }
            
            // Display personalized recommendations
            resultMessage += '<h4>Personalized Recommendations:</h4><ul>';
            
            if (q1 === 'no') {
                resultMessage += '<li>Set up different strong passwords for each of your important accounts. Consider using a password manager.</li>';
            }
            
            if (q2 === 'no') {
                resultMessage += '<li>Review and update your privacy settings on all social media platforms. We recommend doing this quarterly.</li>';
            }
            
            if (q3 === 'no') {
                resultMessage += '<li>Learn how to block and report users on the platforms you use. Each platform has different procedures.</li>';
            }
            
            if (q4 === 'no') {
                resultMessage += '<li>Enable two-factor authentication on your email and social accounts for an extra layer of security.</li>';
            }
            
            if (q5 === 'no') {
                resultMessage += '<li>Familiarize yourself with reporting procedures on your favorite platforms. Knowing how to report abuse is essential.</li>';
            }
            
            resultMessage += '</ul>';
            
            // Display result
            assessmentResults.innerHTML = resultMessage;
            assessmentResults.className = resultClass;
            assessmentResults.style.display = 'block';
            
            // Scroll to results
            assessmentResults.scrollIntoView({ behavior: 'smooth' });
        });
    }
    
    // Comment form
    const commentForm = document.getElementById('comment-form');
    const commentsContainer = document.querySelector('.comments-container');
    
    if (commentForm) {
        commentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const commentText = this.querySelector('textarea').value;
            const isAnonymous = document.getElementById('post-anonymous').checked;
            
            if (commentText.trim() === '') return;
            
            // Create new comment
            const newComment = document.createElement('div');
            newComment.className = 'comment';
            
            const currentDate = new Date();
            const formattedDate = `${currentDate.toLocaleString('default', { month: 'long' })} ${currentDate.getDate()}, ${currentDate.getFullYear()}`;
            
            newComment.innerHTML = `
                <div class="comment-header">
                    <h4>${isAnonymous ? 'Anonymous' : 'You'}</h4>
                    <span class="comment-date">${formattedDate}</span>
                </div>
                <p>${commentText}</p>
                <div class="comment-actions">
                    <button class="like-btn"><i class="far fa-heart"></i> <span>0</span></button>
                    <button class="reply-btn">Reply</button>
                </div>
            `;
            
            // Add new comment to the top
            commentsContainer.insertBefore(newComment, commentsContainer.firstChild);
            
            // Reset form
            this.querySelector('textarea').value = '';
            document.getElementById('post-anonymous').checked = false;
        });
    }
    
    // Like buttons functionality
    document.addEventListener('click', function(e) {
        if (e.target.closest('.like-btn')) {
            const likeBtn = e.target.closest('.like-btn');
            const likeCount = likeBtn.querySelector('span');
            
            // Toggle like state
            if (likeBtn.classList.contains('liked')) {
                likeBtn.classList.remove('liked');
                likeCount.textContent = parseInt(likeCount.textContent) - 1;
                likeBtn.querySelector('i').className = 'far fa-heart';
            } else {
                likeBtn.classList.add('liked');
                likeCount.textContent = parseInt(likeCount.textContent) + 1;
                likeBtn.querySelector('i').className = 'fas fa-heart';
            }
        }
    });
    
    // Learn more buttons
    const learnMoreButtons = document.querySelectorAll('.learn-more');
    
    learnMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            const topic = this.getAttribute('data-topic');
            
            // Here you would typically navigate to a detailed page
            // For now we'll just alert
            alert(`You clicked to learn more about: ${topic}. In a full implementation, this would take you to a detailed page about this topic.`);
        });
    });
    
    // Share story button
    const shareStoryBtn = document.getElementById('share-story-btn');
    
    if (shareStoryBtn) {
        shareStoryBtn.addEventListener('click', function() {
            // In a real implementation, this would open a form or modal
            alert('This would open a form where users can share their stories. Stories would be reviewed before publishing to ensure privacy and safety.');
        });
    }
    
    // Newsletter form
    const newsletterForm = document.getElementById('newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = this.querySelector('input[type="email"]').value;
            
            // In a real implementation, this would send the email to a server
            alert(`Thank you for subscribing with ${email}! You'll receive our next newsletter with safety tips and resources.`);
            
            this.reset();
        });
    }
});
