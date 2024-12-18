$(document).ready(function() {
    let currentStep = 1;
    const totalSteps = 4;

    // Handle Next button clicks
    $('.next-btn').click(function() {
        if (currentStep < totalSteps) {
            // Hide current step
            $(`#step${currentStep}`).removeClass('active');
            // Show next step
            currentStep++;
            $(`#step${currentStep}`).addClass('active');
            // Update progress bar
            updateProgressBar();
        }
    });

    // Handle Previous button clicks
    $('.prev-btn').click(function() {
        if (currentStep > 1) {
            // Hide current step
            $(`#step${currentStep}`).removeClass('active');
            // Show previous step
            currentStep--;
            $(`#step${currentStep}`).addClass('active');
            // Update progress bar
            updateProgressBar();
        }
    });

    // Handle Submit button click
    $('.submit-btn').click(function() {
        alert('فرم با موفقیت ارسال شد!');
    });

    // Update progress bar
    function updateProgressBar() {
        $('.step').removeClass('active');
        for (let i = 1; i <= currentStep; i++) {
            $(`.progress-bar .step:nth-child(${i})`).addClass('active');
        }
    }
});
