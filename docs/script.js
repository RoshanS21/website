document.addEventListener('DOMContentLoaded', () => {
    console.log("Resume website loaded successfully");
    
    const backgroundAnimation = document.querySelector('.background-animation');
    
    // Create new farm equipment periodically
    function createFarmEquipment() {
        const equipment = document.createElement('div');
        
        // Movement direction (30% chance of right-to-left)
        const moveLeftToRight = Math.random() > 0.3;
        
        // Comprehensive list of equipment and crop types
        const types = [
            // John Deere Tractors
            'tractor-8r', 'tractor-9r',
            
            // Harvesting Equipment
            'combine-s780', 'combine-x9', 'cotton-picker',
            
            // Planting & Spraying
            'sprayer-r4060', 'seeder-1775nt',
            
            // Technology
            'gps-receiver', 'starfire-6000', 'display-4640',
            
            // Hand Tools
            'shovel', 'pitchfork', 'disc-harrow',
            
            // Crops
            'corn', 'wheat', 'soybean'
        ];
        
        const type = types[Math.floor(Math.random() * types.length)];
        equipment.className = `farm-equipment ${type}`;
        
        // Determine movement pattern
        const movementType = Math.random();
        let duration, animation;
        
        if (movementType < 0.6) {
            // Vertical movement (more frequent)
            animation = 'move-vertical';
            duration = 15 + Math.random() * 10; // 15-25 seconds
            equipment.style.left = `${Math.random() * 80 + 10}%`;
            // Start from top or bottom randomly
            equipment.style.top = Math.random() < 0.5 ? '-50px' : 'calc(100% + 50px)';
        } else if (movementType < 0.8) {
            // Horizontal movement
            animation = moveLeftToRight ? 'move-horizontal' : 'move-horizontal-reverse';
            duration = 20 + Math.random() * 10; // 20-30 seconds
            equipment.style.top = `${Math.random() * 80 + 10}%`;
            equipment.style.left = moveLeftToRight ? '-50px' : 'calc(100% + 50px)';
        } else {
            // Spiral movement (faster)
            animation = movementType < 0.9 ? 'spiral-clockwise' : 'spiral-counterclockwise';
            duration = 7 + Math.random() * 4; // 7-11 seconds
            equipment.style.left = '50%';
            equipment.style.top = '50%';
        }
        
        // Apply the animation
        equipment.style.animation = `${animation} ${duration}s linear`;
        backgroundAnimation.appendChild(equipment);

        // Remove equipment after animation
        equipment.addEventListener('animationend', () => {
            equipment.remove();
        });
    }

    // Create new equipment more frequently
    setInterval(createFarmEquipment, 600);

    // Create initial set of equipment
    for (let i = 0; i < 30; i++) {
        setTimeout(createFarmEquipment, i * 150);
    }
});
