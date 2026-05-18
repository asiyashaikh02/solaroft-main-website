function selectSize(size) {
    try {
        const allButtons = document.querySelectorAll('[id^="size-"]');
        const allPlans = document.querySelectorAll('.plan-group');
        
        allButtons.forEach(btn => {
            btn.classList.remove('bg-teal-600', 'text-white', 'shadow-lg');
            btn.classList.add('bg-gray-200', 'text-gray-700', 'hover:bg-gray-300');
        });
        
        allPlans.forEach(plan => {
            plan.classList.add('hidden');
        });
        
        const selectedBtn = document.getElementById(`size-${size}`);
        const selectedPlans = document.getElementById(`plans-${size}`);
        
        if (selectedBtn && selectedPlans) {
            selectedBtn.classList.remove('bg-gray-200', 'text-gray-700', 'hover:bg-gray-300');
            selectedBtn.classList.add('bg-teal-600', 'text-white', 'shadow-lg');
            selectedPlans.classList.remove('hidden');
        }
    } catch (e) {
        console.error('Error in selectSize:', e);
    }
}
