
window.onload = function () {
    var questionInputArray = [];

    document.getElementById('cal-question-one').addEventListener('change', formatNumberValue);
    document.getElementById('cal-question-two').addEventListener('change', formatNumberValue);
    document.getElementById('cal-question-three').addEventListener('change', formatNumberValue);
    document.getElementById('cal-question-four').addEventListener('change', formatNumberValue);
    document.getElementById('cal-question-five').addEventListener('change', formatNumberValue);
    document.getElementById('cal-question-six').addEventListener('change', formatNumberValue);
    document.getElementById('cal-question-seven').addEventListener('change', formatNumberValue);
    document.getElementById('cal-question-eight').addEventListener('change', formatNumberValue);
    document.getElementById('cal-question-nine').addEventListener('change', formatNumberValue);

    document.getElementById('cal-question-one').addEventListener('keyup', showDollarSign);
    document.getElementById('cal-question-two').addEventListener('keyup', showDollarSign);
    document.getElementById('cal-question-three').addEventListener('keyup', showDollarSign);
    document.getElementById('cal-question-four').addEventListener('keyup', showDollarSign);
    document.getElementById('cal-question-five').addEventListener('keyup', showDollarSign);
    document.getElementById('cal-question-six').addEventListener('keyup', showDollarSign);
    document.getElementById('cal-question-seven').addEventListener('keyup', showDollarSign);
    document.getElementById('cal-question-eight').addEventListener('keyup', showDollarSign);
    document.getElementById('cal-question-nine').addEventListener('keyup', showDollarSign);

    var assessmentCarousel = document.getElementById('assessment-question-slide');
    assessmentCarousel.addEventListener('slide.bs.carousel', function (event) {
        var assesmentCard = event.relatedTarget;
        if (assesmentCard.id === 'assesment-card-final') {
            var outputTotalExpense = document.getElementById('assesment-expense-total');
            var outputAssessmentFieldA = document.getElementById('assesment-field-a');
            var outputAssessmentBottomRange = document.getElementById('assesment-bottom-range');
            var outputAssessmentTopRange = document.getElementById('assesment-top-range');
            var outputAssessmentResponse = document.getElementById('assesment-response');

            var totalFundSaved = parseFloat(questionInputArray[0]);
            var monthlyFundSaved = parseFloat(questionInputArray[1]);
            var totalMonthlyCost = parseFloat(questionInputArray[2]) + parseFloat(questionInputArray[3]) + parseFloat(questionInputArray[4]) + parseFloat(questionInputArray[5]) + parseFloat(questionInputArray[6]) + parseFloat(questionInputArray[7]) + parseFloat(questionInputArray[8]);
            var bottomRangeMonthlyCost = totalMonthlyCost * 3;
            var topRangeMonthlyCost = totalMonthlyCost * 6;
            var assessmentResponse = '';

            if (totalFundSaved > bottomRangeMonthlyCost && totalFundSaved > topRangeMonthlyCost && monthlyFundSaved === 0) {
                assessmentResponse = 'Terrific job. You can pay for more than 6 months of expenses. Make sure you can access the funds quickly in case of an emergency.';
            } else if (totalFundSaved > bottomRangeMonthlyCost && totalFundSaved > topRangeMonthlyCost && monthlyFundSaved > 0) {
                assessmentResponse = 'Terrific job. You can pay for more than 6 months of expenses. Make sure you can access the funds quickly in case of an emergency. Consider directing future savings to into a tax-advantaged retirement account.';
            } else if (totalFundSaved > bottomRangeMonthlyCost && totalFundSaved < topRangeMonthlyCost && monthlyFundSaved === 0) {
                assessmentResponse = 'Great job. You are within the recommended range. Consider saving a enough to cover a full 6 months\' worth of expenses, and make sure you can access your funds quickly in case of an emergency.';
            } else if (totalFundSaved > bottomRangeMonthlyCost && totalFundSaved < topRangeMonthlyCost && monthlyFundSaved > 1) {
                assessmentResponse = 'Keep up the great work. You are within the recommended range. Consider saving enough to cover a full 6 months\' worth of expenses, and make sure you can access your funds quickly in case of an emergency.';
            } else if (totalFundSaved < (bottomRangeMonthlyCost * 0.5) && monthlyFundSaved === 0) {
                assessmentResponse = 'Your emergency savings is well below the recommended range. Consider adding to your emergency fund each month, and make sure you can access your funds quickly in case of an emergency.';
            } else if (totalFundSaved < (bottomRangeMonthlyCost * 0.5) && monthlyFundSaved > 0 && monthlyFundSaved < 50) {
                assessmentResponse = 'Your emergency savings is well below the recommended range. Keep saving, and look for ways to put away a little more each month. Make sure you can access your funds quickly in case of an emergency.';
            } else if (totalFundSaved < (bottomRangeMonthlyCost * 0.5) && monthlyFundSaved > 0 && monthlyFundSaved >= 50) {
                assessmentResponse = 'Your emergency savings is well below the recommended range. Keep saving, and make sure you can access your funds quickly in case of an emergency.';
            } else if (totalFundSaved > (bottomRangeMonthlyCost * 0.5) && totalFundSaved < bottomRangeMonthlyCost && monthlyFundSaved === 0) {
                assessmentResponse = 'Your emergency savings is below the recommended range. Consider adding to your emergency fund each month, and make sure you can access your funds quickly in case of an emergency.';
            } else if (totalFundSaved > (bottomRangeMonthlyCost * 0.5) && totalFundSaved < bottomRangeMonthlyCost && monthlyFundSaved > 1) {
                assessmentResponse = 'Keep saving and put away a little more if you can! Your emergency savings is below the recommended range. Make sure you can access your funds quickly in case of an emergency.';
            }

            totalMonthlyCost = String(calc_utilities.format_currency(totalMonthlyCost));
            outputTotalExpense.innerHTML = calc_utilities.validate_input(totalMonthlyCost, {
                showdollarsign: true,
                precision: 2
            });
            totalFundSaved = String(calc_utilities.format_currency(totalFundSaved));
            outputAssessmentFieldA.innerHTML = calc_utilities.validate_input(totalFundSaved, {
                showdollarsign: true,
                precision: 2
            });
            bottomRangeMonthlyCost = String(calc_utilities.format_currency(bottomRangeMonthlyCost));
            outputAssessmentBottomRange.innerHTML = calc_utilities.validate_input(bottomRangeMonthlyCost, {
                showdollarsign: true,
                precision: 2
            });
            topRangeMonthlyCost = String(calc_utilities.format_currency(topRangeMonthlyCost));
            outputAssessmentTopRange.innerHTML = calc_utilities.validate_input(topRangeMonthlyCost, {
                showdollarsign: true,
                precision: 2
            });
            outputAssessmentResponse.innerHTML = assessmentResponse;
        } else {
            var inputQuestionOne = document.getElementById('cal-question-one');
            var inputQuestionTwo = document.getElementById('cal-question-two');
            var inputQuestionThree = document.getElementById('cal-question-three');
            var inputQuestionFour = document.getElementById('cal-question-four');
            var inputQuestionFive = document.getElementById('cal-question-five');
            var inputQuestionSix = document.getElementById('cal-question-six');
            var inputQuestionSeven = document.getElementById('cal-question-seven');
            var inputQuestionEight = document.getElementById('cal-question-eight');
            var inputQuestionNine = document.getElementById('cal-question-nine');

            questionInputArray[0] = calc_utilities.sanitize_num(calc_utilities.validate_input(inputQuestionOne.value.trim(), { precision: 2 }));
            questionInputArray[1] = calc_utilities.sanitize_num(calc_utilities.validate_input(inputQuestionTwo.value.trim(), { precision: 2 }));
            questionInputArray[2] = calc_utilities.sanitize_num(calc_utilities.validate_input(inputQuestionThree.value.trim(), { precision: 2 }));
            questionInputArray[3] = calc_utilities.sanitize_num(calc_utilities.validate_input(inputQuestionFour.value.trim(), { precision: 2 }));
            questionInputArray[4] = calc_utilities.sanitize_num(calc_utilities.validate_input(inputQuestionFive.value.trim(), { precision: 2 }));
            questionInputArray[5] = calc_utilities.sanitize_num(calc_utilities.validate_input(inputQuestionSix.value.trim(), { precision: 2 }));
            questionInputArray[6] = calc_utilities.sanitize_num(calc_utilities.validate_input(inputQuestionSeven.value.trim(), { precision: 2 }));
            questionInputArray[7] = calc_utilities.sanitize_num(calc_utilities.validate_input(inputQuestionEight.value.trim(), { precision: 2 }));
            questionInputArray[8] = calc_utilities.sanitize_num(calc_utilities.validate_input(inputQuestionNine.value.trim(), { precision: 2 }));
        }
    });
    var carousel = new bootstrap.Carousel(assessmentCarousel, {
        interval: false,
        ride: false
    });
};

function formatNumberValue(event) {
    var targetInput = event.target;
    var inputPrefixId = null;
    if (targetInput.hasAttribute("data-prefix")) {
        inputPrefixId = targetInput.dataset.prefix;
    }
    if (targetInput.value !== '') {
        if (targetInput.classList && targetInput.classList.contains('is-invalid')) {
            targetInput.classList.remove('is-invalid');
        }
        targetInput.value = calc_utilities.validate_input(targetInput.value, {
            showdollarsign: false,
            precision: 2
        });
        if (inputPrefixId !== null) {
            if (targetInput.value !== '') {
                document.getElementById(inputPrefixId).innerHTML = '$';
            } else {
                document.getElementById(inputPrefixId).innerHTML = '';
            }
        }
    }
}

function showDollarSign(event) {
    var inputElement = event.target;
    var inputPrefixId = inputElement.dataset.prefix;
    if (inputElement.value !== '') {
        document.getElementById(inputPrefixId).innerHTML = '$';
    } else {
        document.getElementById(inputPrefixId).innerHTML = '';
    }
}
