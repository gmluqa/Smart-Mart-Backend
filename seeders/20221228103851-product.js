"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Products",
      [
        {
          id: 1,
          product_name: "Zubits",
          product_alt_text: "Magnetic shoe laces",
          product_price: "4.99€",
          product_description:
            "Zubits are revolutionary magnetic shoe laces that make it easy to put on and take off your shoes. Simply connect the magnets together and your shoes will stay securely in place. No more fumbling with traditional laces that can be difficult to tie, especially for people with mobility issues. Zubits are perfect for all ages and are especially convenient for athletes and people on the go. Upgrade your footwear with Zubits and never worry about tied laces again.",
          active: true,
          youtube_url: "https://www.youtube.com/embed/V7qc5pEuJ_I",
          createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
          updatedAt: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          id: 2,
          product_name: "Orange Pi 5 4GB",
          product_alt_text: "GPIO/SBC, Raspberry pi alternative",
          product_price: "4.99€",
          product_description:
            "The Orange Pi 5 is a powerful and affordable Raspberry Pi alternative that is perfect for DIY projects and home media centers. With 4GB of RAM and a 64-bit quad-core processor, this tiny computer packs a punch and can handle a wide range of tasks. Its small size and low power consumption make it an excellent choice for projects that require a compact and energy-efficient device. Whether you want to build a retro gaming console, a home security system, or a media server, the Orange Pi 5 has the performance and versatility to get the job done.",
          active: true,
          youtube_url: "https://www.youtube.com/embed/79lquFD3oT4",
          createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
          updatedAt: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          id: 3,
          product_name: "Ecoco, Automatic Toothpaste Dispenser",
          product_alt_text: "Wall mounted toothpaste dispenser",
          product_price: "9.99€",
          product_description:
            "The Ecoco Automatic Toothpaste Dispenser is a convenient and hygienic way to dispense toothpaste. This wall-mounted dispenser eliminates the need for a traditional toothpaste tube and reduces waste. It works without electricity, making it an eco-friendly choice for your bathroom. The dispenser is easy to install and comes with a toothbrush holder, so you can keep your bathroom organized and clutter-free. With its sleek design and touchless operation, the Ecoco Automatic Toothpaste Dispenser is a must-have for any bathroom.",
          active: true,
          youtube_url: "https://www.youtube.com/embed/9yv_qUgCBQE",
          createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
          updatedAt: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          id: 4,
          product_name: "Life Straw",
          product_alt_text:
            "Straw that converts any unpurified water into drinkable water.",
          product_price: "2.99€",
          product_description:
            "The Life Straw is a portable water filter that allows you to turn any water source into clean, safe drinking water. Whether you're hiking, traveling, or in an emergency situation, the Life Straw is an essential tool that ensures you always have access to clean water. Its compact size and lightweight design make it easy to carry, and it requires no electricity or batteries to operate. Simply put the Life Straw in water and drink through it to filter out 99.9999% of waterborne bacteria and 99.9% of waterborne protozoan parasites. The Life Straw is a game-changing tool that can save lives in a pinch.",
          active: true,
          youtube_url: "https://www.youtube.com/embed/VuJpgN1oCxQ",
          createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
          updatedAt: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          id: 5,
          product_name: "Sushi Roller",
          product_alt_text: "Sushi Roller that automates sushi making.",
          product_price: "12.99€",
          product_description:
            "The Sushi Roller is a kitchen gadget that makes it easy to prepare perfect sushi rolls at home. With its innovative design, the Sushi Roller allows you to effortlessly roll sushi in seconds. Simply lay out your ingredients on the Sushi Roller, roll it up, and you'll have perfectly shaped sushi every time. The Sushi Roller is great for both beginner and experienced sushi chefs and is perfect for making a variety of sushi rolls, including classic maki rolls, futomaki rolls, and more. With the Sushi Roller, you can enjoy restaurant-quality sushi at home without the hassle of trying to roll it by hand.",
          active: true,
          youtube_url: "https://www.youtube.com/embed/_VuywLIRmhg",
          createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
          updatedAt: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          id: 6,
          product_name: "Cable Management Hub",
          product_alt_text: "Desk bound cable manager, cable management.",
          product_price: "12.99€",
          product_description:
            "The Cable Management Hub is a desk-bound organizer that keeps your cables and cords tidy and organized. This handy gadget features a series of compartments and channels that allow you to route your cables and cords in a neat and orderly fashion. Whether you're setting up a home office or just trying to declutter your desk, the Cable Management Hub is an essential tool that helps you keep your workspace clean and free of clutter. With its sleek design and compact size, the Cable Management Hub fits easily on your desk and keeps your cables organized and out of sight.",
          active: true,
          createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
          updatedAt: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          id: 7,
          product_name: "Unit Cable Clips",
          product_alt_text: "Unit cable clips, cable management",
          product_price: "12.99€",
          product_description:
            "Unit Cable Clips are a simple and effective way to manage your cables and cords. These handy clips keep your cables organized and in place, preventing them from getting tangled or falling behind your desk. The clips are easy to use, simply push them onto your desk or wall and route your cables through them. They are compatible with a variety of cable sizes and can be easily removed or repositioned without leaving any residue. Whether you're setting up a home office or just trying to declutter your workspace, Unit Cable Clips are an essential tool that can help you keep your cables organized and out of sight.",
          active: true,
          createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
          updatedAt: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          id: 8,
          product_name: "L-Theanine",
          product_alt_text:
            "Naturally occurring amino acid found in tea, studies have shown that taking 200 mg of L-theanine has a calming effect, without causing drowsiness.",
          product_price: "12.99€",
          product_description:
            "L-Theanine is an amino acid that is found naturally in tea leaves and is known for its ability to promote relaxation and improve sleep. It works by increasing the production of alpha brain waves, which are associated with relaxation and alertness. L-Theanine is often taken as a supplement to help reduce stress, improve sleep quality, and enhance cognitive function. It is generally considered safe and well-tolerated, with few reported side effects. If you are looking for a natural way to promote relaxation and improve sleep, L-Theanine may be worth considering.",
          active: true,
          createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
          updatedAt: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          id: 9,
          product_name: "Smart Plug",
          product_alt_text: "Smart plug, outlet.",
          product_price: "12.99€",
          product_description:
            "A smart plug is a device that allows you to control and program your electrical outlets using a smartphone or voice assistant. With a smart plug, you can turn appliances and electronics on and off remotely, set schedules, and monitor energy usage. Smart plugs are an easy and convenient way to add smart features to your home without the need for expensive upgrades or installations. They are easy to set up and use, simply plug them into an outlet and connect them to your home's Wi-Fi network. Whether you want to turn off your coffee maker from bed or schedule your lights to turn off when you leave for work, a smart plug can help you automate and control your home with ease.",
          active: true,
          createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
          updatedAt: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          id: 10,
          product_name: "Creatine Monohydrate",
          product_alt_text: "Good for workouts",
          product_price: "12.99€",
          product_description:
            "Creatine monohydrate is a dietary supplement that is widely used by athletes and bodybuilders to increase muscle strength and power. It is a naturally occurring compound that is found in the body and is also found in certain foods, such as meat and fish. When taken as a supplement, creatine monohydrate is converted to phosphocreatine in the body, which is then used to produce ATP (adenosine triphosphate), the main energy source for muscle contractions. Many studies have shown that supplementing with creatine monohydrate can improve muscle strength, power, and size, as well as exercise performance. It is generally considered safe and well-tolerated, with few reported side effects.",
          active: true,
          createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
          updatedAt: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          id: 11,
          product_name: "Panax Ginseng",
          product_alt_text: "Supplement, energy.",
          product_price: "12.99€",
          product_description:
            "Panax ginseng, also known as Asian ginseng or Korean ginseng, is a plant that is native to East Asia and is widely used in traditional medicine. It is believed to have a wide range of health benefits, including improving mental and physical performance, reducing stress and anxiety, and boosting the immune system. Panax ginseng is often taken as a dietary supplement and is available in various forms, including capsules, tablets, and tea. Although it is generally considered safe, it is important to talk to a healthcare professional before taking panax ginseng or any other dietary supplement, as it can interact with certain medications and may have side effects in some people.",
          active: true,
          createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
          updatedAt: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          id: 12,
          product_name: "Toothbrush Holder",
          product_alt_text: "Toothbrush Holder",
          product_price: "12.99€",
          product_description:
            "A toothbrush holder is a simple yet essential bathroom accessory that keeps your toothbrush clean and organized. It is a container that is designed to hold and store your toothbrush, keeping it away from germs and bacteria. A toothbrush holder is an inexpensive and convenient way to keep your toothbrush clean and organized, and it is an essential item for any bathroom.",
          active: true,
          createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
          updatedAt: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          id: 13,
          product_name: "Cleaning Slippers",
          product_alt_text: "Turn your house guests into cleaning serfs.",
          product_price: "12.99€",
          product_description:
            "Cleaning slippers are felt slipper extensions that transform your house slippers into cleaning tools. Simply slide the extensions onto the bottom of your slippers and you'll be able to mop up spills and messes as you walk around your home. The felt material is absorbent and effective at picking up dirt and liquid, and it is machine washable for easy cleaning. Cleaning slippers are a convenient and hands-free way to keep your floors clean, and they are perfect for people who don't want to bend down to clean up messes. With cleaning slippers, you can keep your home clean and tidy without lifting a finger.",
          active: true,
          createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
          updatedAt: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          id: 14,
          product_name: "Silicone Washing Gloves",
          product_alt_text: "Silicone Washing Gloves",
          product_price: "12.99€",
          product_description:
            "Silicone washing gloves are an innovative cleaning tool that allows you to wash dishes and clean surfaces without the need for sponges or scrubbers. Made of durable and flexible silicone, these gloves have scrubbing bristles on the palms and fingers that allow you to easily scrub away dirt and grime. They are heat resistant, so you can use them to wash dishes that have been heated in the microwave or oven. Silicone washing gloves are also resistant to bacteria and mold, making them a hygienic alternative to traditional sponges. They are easy to clean and dry quickly, making them a convenient and practical choice for your cleaning needs.",
          active: true,
          createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
          updatedAt: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          id: 15,
          product_name: "Smart Light Bulb",
          product_alt_text: "Light Bulb, RGB, Timer.",
          product_price: "12.99€",
          product_description:
            "A smart light bulb is an LED light bulb that can be controlled and programmed using a smartphone or voice assistant. With a smart light bulb, you can turn your lights on and off remotely, set schedules, and adjust the brightness and color of your lights. Smart light bulbs are an easy and convenient way to add smart features to your home without the need for expensive upgrades or installations. They are easy to set up and use, simply screw them into your light fixtures and connect them to your home's Wi-Fi network. Whether you want to turn off your lights from bed or set the mood with different colors, a smart light bulb can help you automate and control your home lighting with ease.",
          active: true,
          createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
          updatedAt: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          id: 16,
          product_name: "Smart Switch",
          product_alt_text: "Control all smart devices.",
          product_price: "12.99€",
          product_description:
            "A smart switch is a device that allows you to control and program your electrical outlets using a smartphone or voice assistant. With a smart switch, you can turn appliances and electronics on and off remotely, set schedules, and monitor energy usage. Smart switches are an easy and convenient way to add smart features to your home without the need for expensive upgrades or installations. They are easy to set up and use, simply replace your existing switch with a smart switch and connect it to your home's Wi-Fi network. Whether you want to turn off your coffee maker from bed or schedule your lights to turn off when you leave for work, a smart switch can help you automate and control your home with ease.",
          active: true,
          createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
          updatedAt: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          id: 17,
          product_name: "Caffeine Tablets",
          product_alt_text: "Caffeine tablets",
          product_price: "12.99€",
          product_description:
            "Caffeine tablets are a dietary supplement that contains caffeine, a stimulant that is found naturally in coffee, tea, and cocoa beans. Caffeine is known for its ability to increase alertness and improve cognitive function, and it is often used as a performance-enhancing substance. Caffeine tablets are a convenient way to consume caffeine, as they are easy to swallow and do not require the consumption of liquid. They are available in various dosages and are often used by athletes, students, and professionals who want to boost their energy and focus. It is important to be mindful of your caffeine intake, as excessive consumption can lead to side effects such as insomnia, jitters, and increased heart rate.",
          active: true,
          createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
          updatedAt: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          id: 18,
          product_name: "Smart Thermostat Manager",
          product_alt_text:
            "Smart Thermostat Manager, automate house actions due to air humidity and temperature.",
          product_price: "12.99€",
          product_description:
            "The Smart Thermostat Manager is a smart home device that allows you to automate and control your home's heating and cooling system based on temperature and humidity levels. With this device, you can set temperature and humidity thresholds, and the Smart Thermostat Manager will automatically adjust your thermostat to maintain optimal conditions. For example, you can set the device to turn on the air conditioning if the humidity in your home becomes too high, or turn off the heat if the temperature drops below a certain level. The Smart Thermostat Manager is an energy-efficient and convenient way to maintain a comfortable and healthy home environment. It can be easily controlled using a smartphone or voice assistant.",
          active: true,
          createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
          updatedAt: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          id: 19,
          product_name: "Backup Battery",
          product_alt_text: "Uninteruptable electricity backup",
          product_price: "12.99€",
          product_description:
            "A backup battery is a portable power source that provides uninterruptible electricity in the event of a power outage or other emergency. It is a battery-powered device that can be used to power a variety of devices, including smartphones, laptops, and small appliances. A backup battery is a must-have for anyone who relies on electricity to power their devices, and it is especially useful in situations where access to electricity is limited or unreliable. It can provide peace of mind and ensure that you have a reliable source of power when you need it most.",
          active: true,
          createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
          updatedAt: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          id: 20,
          product_name:
            "Dreame D9 Pro: Valetudo (with open source custom firmware)",
          product_alt_text:
            "State of the art cleaning robot unlinked from the public cloud",
          product_price: "12.99€",
          product_description:
            "The Dreame D9 Pro is a powerful and efficient cleaning hoover that also comes with custom libre open source firmware. This firmware ensures that the hoover does not spy on your home or record any data to the public cloud, giving you peace of mind and privacy. The Dreame D9 Pro is a versatile cleaning tool that can be used to remove dust, dirt, and debris from a variety of surfaces. It comes with a range of attachments and features that make it easy to clean hard-to-reach areas and corners. Whether you're cleaning your floors, furniture, or car, the Dreame D9 Pro has you covered. Its custom libre open source firmware ensures that your privacy is protected while you're using it.",
          active: true,
          createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
          updatedAt: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Products", null, {});
  },
};
