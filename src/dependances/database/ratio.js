import chest from '../assets/muscu/chest.png'
import arm from '../assets/muscu/arm.png'
import back from '../assets/muscu/back.png'
import leg from '../assets/muscu/leg.png'
import calf from '../assets/muscu/calf.png'
import weightlifting from '../assets/muscu/weightlifting.png'
import abs from '../assets/muscu/abs.png'
import shoulder from '../assets/muscu/shoulder.png'


export const ratioMuscu = {
    age: {
        '14': 87,
        '17': 87,
        '18': 98,
        '23': 98,
        '24': 100,
        '39': 100,
        '40': 95,
        '49': 95,
        '50': 83,
        '59': 83,
        '60': 79,
        '69': 79,
        '70': 55,
        '79': 55,
        '80': 44,
    },

    Strength: [

         {
            male: { medalBronze: 55, medalSilver: 85, medalGold: 100, trophyBronze: 120, trophySilver: 160, trophyGold: 200, },
            female: { medalBronze: 27, medalSilver: 50, medalGold: 65, trophyBronze: 80, trophySilver: 115, trophyGold: 160, },
            name: { En: 'Bench press', Fr: 'Développé couché' },
            type:'chest',src:'./assets/muscu/chest.png',id:0,lest : '1'

        },

         {
            male: { medalBronze: 90, medalSilver: 120, medalGold: 150, trophyBronze: 180, trophySilver: 240, trophyGold: 310 },
            female: { medalBronze: 60, medalSilver: 90, medalGold: 120, trophyBronze: 150, trophySilver: 21, trophyGold: 280 },
            name: { En: 'Dead lift', Fr: 'Soulevé de terre' },
            type:'weightlifting',src:{weightlifting},id:1,lest : '1'
        },

         {
            male: { medalBronze: 75, medalSilver: 100, medalGold: 120, trophyBronze: 160, trophySilver: 200, trophyGold: 260 },
            female: { medalBronze: 45, medalSilver: 75, medalGold: 100, trophyBronze: 120, trophySilver: 160, trophyGold: 230 },
            name: { En: 'Squat', Fr: 'Squat' },
            type:'leg',src:{leg},id:2,lest : '1'
        },

         {
            male: { medalBronze: 35, medalSilver: 45, medalGold: 55, trophyBronze: 75, trophySilver: 100, trophyGold: 130 },
            female: { medalBronze: 20, medalSilver: 30, medalGold: 43, trophyBronze: 55, trophySilver: 80, trophyGold: 105 },
            name: { En: 'Shoulder Press', Fr: 'Développé épaules' },
            type:'shoulder',src:{shoulder},id:3,lest : '1'
        },

         {
            male: { medalBronze: 1, medalSilver: 5, medalGold: 10, trophyBronze: 14, trophySilver: 24, trophyGold: 35 },
            female: { medalBronze: 0, medalSilver: 1, medalGold: 3, trophyBronze: 6, trophySilver: 13, trophyGold: 22 },
            name: { En: 'Pull up body-wheight', Fr: 'Traction pronation poids du corps' },
            type:'back',src:{back},id:4,lest:'2'
        },

         {
            male: { medalBronze: -15, medalSilver: 8, medalGold: 20, trophyBronze: 35, trophySilver: 60, trophyGold: 90 },
            female: { medalBronze: -25, medalSilver: -10, medalGold: 2, trophyBronze: 8, trophySilver: 25, trophyGold: 40 },
            name: { En: 'Lested pull up', Fr: 'Traction pronation lesté' },
            type:'back',src:{back},id:5,lest : '1'
        },
         {
            male: { medalBronze: 20, medalSilver: 30, medalGold: 40, trophyBronze: 50, trophySilver: 70, trophyGold: 95, },
            female: { medalBronze: 10, medalSilver: 15, medalGold: 22, trophyBronze: 30, trophySilver: 50, trophyGold: 70 },
            name: { En: 'Dumbell bench press', Fr: 'Développé couché haltéres' },
            type:'chest',src:{chest},id:6,lest : '1'
        },

         {
            male: { medalBronze: 20, medalSilver: 35, medalGold: 45, trophyBronze: 60, trophySilver: 85, trophyGold: 120, },
            female: { medalBronze: 10, medalSilver: 20, medalGold: 30, trophyBronze: 40, trophySilver: 60, trophyGold: 90 },
            name: { En: 'Barbel curl', Fr: 'Curl biceps barre droite' },
            type:'arm',src:{arm},id:7,lest : '1'
        },

         {
            male: { medalBronze: 6, medalSilver: 15, medalGold: 22, trophyBronze: 30, trophySilver: 50, trophyGold: 67, },
            female: { medalBronze: 4, medalSilver: 10, medalGold: 15, trophyBronze: 21, trophySilver: 33, trophyGold: 48 },
            name: { En: 'Dumbel curl', Fr: 'Curl biceps haltére' },
            type:'arm',src:{arm},id:8,lest : '1'
        },

         {
            male: { medalBronze: 60, medalSilver: 95, medalGold: 100, trophyBronze: 130, trophySilver: 170, trophyGold: 215, },
            female: { medalBronze: 50, medalSilver: 70, medalGold: 90, trophyBronze: 110, trophySilver: 130, trophyGold: 180 },
            name: { En: 'Front squat', Fr: 'Squat avant' },
            type:'leg',src:{leg},id:9,lest : '1'
        },
         {
            male: { medalBronze: 50, medalSilver: 65, medalGold: 80, trophyBronze: 100, trophySilver: 140, trophyGold: 180, },
            female: { medalBronze: 25, medalSilver: 45, medalGold: 60, trophyBronze: 75, trophySilver: 100, trophyGold: 130 },
            name: { En: 'Bend over row', Fr: 'tirage penché en avant' },
            type:'chest',src:{chest},id:10,lest : '1'
        },

         {
            male: { medalBronze: 1, medalSilver: 14, medalGold: 25, trophyBronze: 40, trophySilver: 60, trophyGold: 100, },
            female: { medalBronze: 1, medalSilver: 5, medalGold: 15, trophyBronze: 20, trophySilver: 30, trophyGold: 50 },
            name: { En: 'Push ups body wheight', Fr: 'pompes poids du corps' },
            type:'back',src:{back},id:11,lest : '2'
        },

         {
            male: { medalBronze: 0, medalSilver: 50, medalGold: 75, trophyBronze: 105, trophySilver: 180, trophyGold: 250, },
            female: { medalBronze: -10, medalSilver: 0, medalGold: 10, trophyBronze: 40, trophySilver: 80, trophyGold: 120 },
            name: { En: 'Push ups lested', Fr: 'pompes lesté' },
            type:'chest',src:{chest},id:12,lest : '1'
        },
         {
            male: { medalBronze: 16, medalSilver: 25, medalGold: 35, trophyBronze: 45, trophySilver: 55, trophyGold: 70, },
            female: { medalBronze: 7, medalSilver: 12, medalGold: 20, trophyBronze: 27, trophySilver: 35, trophyGold: 50 },
            name: { En: 'Dumbell shoulder press', Fr: 'Développé épaules altere' },
            type:'shoulder',src:{shoulder},id:13,lest : '1'
        },
         {
            male: { medalBronze: 55, medalSilver: 70, medalGold: 90, trophyBronze: 115, trophySilver: 150, trophyGold: 190 },
            female: { medalBronze: 45, medalSilver: 60, medalGold: 75, trophyBronze: 90, trophySilver: 110, trophyGold: 140 },
            name: { En: 'Power clean', Fr: 'Epaulé ' },
            type:'shoulder',src:{shoulder},id:14,lest : '1'
        },
         {
            male: { medalBronze: 50, medalSilver: 70, medalGold: 90, trophyBronze: 110, trophySilver: 130, trophyGold: 170, },
            female: { medalBronze: 20, medalSilver: 35, medalGold: 50, trophyBronze: 65, trophySilver: 95, trophyGold: 130 },
            name: { En: 'Incline bench press', Fr: 'Développé couché incliné' },
            type:'chest',src:{chest},id:15,lest : '1'
        },
         {
            male: { medalBronze: 80, medalSilver: 150, medalGold: 200, trophyBronze: 260, trophySilver: 390, trophyGold: 530, },
            female: { medalBronze: 60, medalSilver: 110, medalGold: 150, trophyBronze: 200, trophySilver: 310, trophyGold: 480 },
            name: { En: 'Sled leg press', Fr: 'presse à cuisse incliné' },
            type:'leg',src:{leg},id:16,lest : '1'
        },
         {
            male: { medalBronze: 1, medalSilver: 6, medalGold: 12, trophyBronze: 18, trophySilver: 30, trophyGold: 45, },
            female: { medalBronze: 1, medalSilver: 2, medalGold: 5, trophyBronze: 10, trophySilver: 20, trophyGold: 30 },
            name: { En: 'Dips body wheight', Fr: 'dips poids du corps' },
            type:'chest',src:{chest},id:17,lest : '2'
        },
         {
            male: { medalBronze: 0, medalSilver: 10, medalGold: 25, trophyBronze: 50, trophySilver: 90, trophyGold: 120 },
            female: { medalBronze: 0, medalSilver: 5, medalGold: 10, trophyBronze: 20, trophySilver: 50, trophyGold: 90 },
            name: { En: 'Dips lested', Fr: 'Dips lesté' },
            type:'chest',src:{chest},id:18,lest : '1'
        },
         {
            male: { medalBronze: 30, medalSilver: 45, medalGold: 60, trophyBronze: 75, trophySilver: 100, trophyGold: 130 },
            female: { medalBronze: 20, medalSilver: 35, medalGold: 45, trophyBronze: 60, trophySilver: 75, trophyGold: 95 },
            name: { En: 'Military press', Fr: 'Développé militaire' },
            type:'shoulder',src:{shoulder},id:19,lest : '1'
        },
         {
            male: { medalBronze: 100, medalSilver: 140, medalGold: 160, trophyBronze: 200, trophySilver: 260, trophyGold: 320 },
            female: { medalBronze: 75, medalSilver: 90, medalGold: 120, trophyBronze: 150, trophySilver: 190, trophyGold: 270 },
            name: { En: 'Hex bar dead lift', Fr: 'Soulevé de terre trap/hex barre' },
            type:'weightlifting',src:{weightlifting},id:20,lest : '1'
        },
         {
            male: { medalBronze: 20, medalSilver: 30, medalGold: 40, trophyBronze: 50, trophySilver: 65, trophyGold: 80 },
            female: { medalBronze: 10, medalSilver: 15, medalGold: 20, trophyBronze: 30, trophySilver: 45, trophyGold: 60 },
            name: { En: 'Incline dumbell bench press ', Fr: 'Développé incliné haltére' },
            type:'chest',src:{chest},id:21,lest : '1'
        },
         {
            male: { medalBronze: 1, medalSilver: 6, medalGold: 10, trophyBronze: 18, trophySilver: 24, trophyGold: 32 },
            female: { medalBronze: 1, medalSilver: 2, medalGold: 4, trophyBronze: 7, trophySilver: 12, trophyGold: 18 },
            name: { En: 'Chins up body wheight', Fr: 'Traction supination poids du corps' },
            type:'back',src:{back},id:22,lest : '2'
        },
         {
            male: { medalBronze: -5, medalSilver: 10, medalGold: 20, trophyBronze: 36, trophySilver: 60, trophyGold: 100 },
            female: { medalBronze: -5, medalSilver: 1, medalGold: 7, trophyBronze: 15, trophySilver: 30, trophyGold: 60 },
            name: { En: 'Chins up Lested', Fr: 'Traction supination lesté' },
            type:'back',src:{back},id:23,lest : '1'
        },
         {
           male: { medalBronze: 80, medalSilver: 150, medalGold: 200, trophyBronze: 250, trophySilver: 350, trophyGold: 460 },
            female: { medalBronze: 50, medalSilver: 90, medalGold: 130, trophyBronze: 190, trophySilver: 300, trophyGold: 400 },
            name: { En: 'Horizontal leg press', Fr: 'Presse a cuisse horizontale' },
            type:'back',src:{back},id:24,lest : '1'
        },
         {
            male: { medalBronze: 3, medalSilver: 10, medalGold: 15, trophyBronze: 20, trophySilver: 35, trophyGold: 50 },
            female: { medalBronze: 3, medalSilver: 8, medalGold: 12, trophyBronze: 15, trophySilver: 25, trophyGold: 35 },
            name: { En: 'Dumbell lateral raise', Fr: 'Elevation latérale haltére' },
            type:'shoulder',src:{shoulder},id:25,lest : '1'
        },
         {
            male: { medalBronze: 15, medalSilver: 25, medalGold: 40, trophyBronze: 50, trophySilver: 75, trophyGold: 100 },
            female: { medalBronze: 12, medalSilver: 18, medalGold: 24, trophyBronze: 35, trophySilver: 45, trophyGold: 65 },
            name: { En: 'Dumbell row', Fr: 'Tirage horizontal haltére' },
            type:'back',src:{back},id:26,lest : '1'
        },
         {
            male: { medalBronze: 44, medalSilver: 60, medalGold: 80, trophyBronze: 90, trophySilver: 130, trophyGold: 150 },
            female: { medalBronze: 30, medalSilver: 45, medalGold: 55, trophyBronze: 65, trophySilver: 95, trophyGold: 130 },
            name: { En: 'Snatch', Fr: 'Araché' },
            type:'weightlifting',src:{weightlifting},id:27,lest : '1'
        },
         {
            male: { medalBronze: 55, medalSilver: 70, medalGold: 90, trophyBronze: 115, trophySilver: 150, trophyGold: 190 },
            female: { medalBronze: 45, medalSilver: 60, medalGold: 70, trophyBronze: 90, trophySilver: 120, trophyGold: 150 },
            name: { En: 'Clean and jerk', Fr: 'Epaulé jetter' },
            type:'weightlifting',src:{weightlifting},id:28,lest : '1'
        },
         {
            male: { medalBronze: 70, medalSilver: 90, medalGold: 120, trophyBronze: 150, trophySilver: 200, trophyGold: 260 },
            female: { medalBronze: 50, medalSilver: 60, medalGold: 80, trophyBronze: 100, trophySilver: 130, trophyGold: 180 },
            name: { En: 'Romanian dead lift', Fr: 'Soulevé de terre roumain' },
            type:'weightlifting',src:{weightlifting},id:29,lest : '1'
        },
         {
            male: { medalBronze: 40, medalSilver: 70, medalGold: 120, trophyBronze: 160, trophySilver: 240, trophyGold: 330 },
            female: { medalBronze: 40, medalSilver: 70, medalGold: 120, trophyBronze: 160, trophySilver: 240, trophyGold: 330 },
            name: { En: 'Hip trust', Fr: 'Hip trust' },
            type:'leg',src:{leg},id:30,lest : '1'
        },
         {
            male: { medalBronze: 100, medalSilver: 140, medalGold: 180, trophyBronze: 210, trophySilver: 260, trophyGold: 330, },
            female: { medalBronze: 80, medalSilver: 100, medalGold: 130, trophyBronze: 155, trophySilver: 200, trophyGold: 240 },
            name: { En: 'Sumo dead lift', Fr: 'Soulevé de terre sumo' },
            type:'back',src:{back},id:31,lest : '1'
        },
         {
            male: { medalBronze: 65, medalSilver: 80, medalGold: 100, trophyBronze: 120, trophySilver: 150, trophyGold: 180, },
            female: { medalBronze: 50, medalSilver: 60, medalGold: 70, trophyBronze: 80, trophySilver: 100, trophyGold: 120 },
            name: { En: 'Clean', Fr: 'Epaulé strict' },
            type:'shoulder',src:{shoulder},id:32,lest : '1'
        },
         {
            male: { medalBronze: 45, medalSilver: 70, medalGold: 85, trophyBronze: 130, trophySilver: 180, trophyGold: 230, },
            female: { medalBronze: 30, medalSilver: 45, medalGold: 70, trophyBronze: 90, trophySilver: 140, trophyGold: 180 },
            name: { En: 'Leg extension', Fr: 'Leg extension' },
            type:'leg',src:{leg},id:33,lest : '1'
        },
         {
            male: { medalBronze: 40, medalSilver: 60, medalGold: 80, trophyBronze: 100, trophySilver: 140, trophyGold: 170 },
            female: { medalBronze: 35, medalSilver: 50, medalGold: 65, trophyBronze: 75, trophySilver: 95, trophyGold: 120 },
            name: { En: 'Push press', Fr: 'Devellopé militaire avec impulision' },
            type:'shoulder',src:{shoulder},id:34,lest : '1'
        },
         {
            male: { medalBronze: 40, medalSilver: 60, medalGold: 80, trophyBronze: 100, trophySilver: 140, trophyGold: 170 },
            female: { medalBronze: 30, medalSilver: 40, medalGold: 50, trophyBronze: 65, trophySilver: 90, trophyGold: 120 },
            name: { En: 'Clean and press', Fr: 'Tirage clavicule + epaulé' },
            type:'weightlifting',src:{weightlifting},id:35,lest : '1'
        },
         {
            male: { medalBronze: 50, medalSilver: 65, medalGold: 80, trophyBronze: 105, trophySilver: 140, trophyGold: 170 },
            female: { medalBronze: 35, medalSilver: 50, medalGold: 60, trophyBronze: 75, trophySilver: 90, trophyGold: 120 },
            name: { En: 'Lat pullDown', Fr: 'Tirage vertical' },
            type:'back',src:{back},id:36,lest : '1'
        },
         {
            male: { medalBronze: 40, medalSilver: 60, medalGold: 80, trophyBronze: 120, trophySilver: 160, trophyGold: 220 },
            female: { medalBronze: 15, medalSilver: 30, medalGold: 50, trophyBronze: 70, trophySilver: 80, trophyGold: 120 },
            name: { En: 'Chest press', Fr: 'Presse à pec' },
            type:'chest',src:{chest},id:37,lest : '1'
        },
         {
            male: { medalBronze: 25, medalSilver: 45, medalGold: 60, trophyBronze: 80, trophySilver: 110, trophyGold: 150 },
            female: { medalBronze: 15, medalSilver: 20, medalGold: 30, trophyBronze: 50, trophySilver: 75, trophyGold: 110 },
            name: { En: 'Tricep push down', Fr: 'Triceps à la poulie' },
            type:'arm',src:{arm},id:38,lest : '1'
        },
         {
            male: { medalBronze: 40, medalSilver: 60, medalGold: 100, trophyBronze: 150, trophySilver: 230, trophyGold: 300 },
            female: { medalBronze: 20, medalSilver: 40, medalGold: 70, trophyBronze: 100, trophySilver: 150, trophyGold: 220 },
            name: { En: 'Barbell shrug', Fr: 'shrugs à la barre' },
            type:'back',src:{back},id:39,lest : '1'

        },
         {
            male: { medalBronze: 40, medalSilver: 80, medalGold: 120, trophyBronze: 170, trophySilver: 250, trophyGold: 380 },
            female: { medalBronze: 20, medalSilver: 50, medalGold: 80, trophyBronze: 120, trophySilver: 200, trophyGold: 300 },
            name: { En: 'Calf raise', Fr: 'Extention des molets' },
            type:'calf',src:{calf},id:40,lest : '1'
        },
         {
            male: { medalBronze: 100, medalSilver: 140, medalGold: 220, trophyBronze: 270, trophySilver: 390, trophyGold: 520 },
            female: { medalBronze: 60, medalSilver: 110, medalGold: 180, trophyBronze: 220, trophySilver: 350, trophyGold: 450 },
            name: { En: 'Vertical Leg Press', Fr: 'Presse à cuisse verticale' },
            type:'leg',src:{leg},id:41,lest : '1'

        },
         {
            male: { medalBronze: 50, medalSilver: 70, medalGold: 90, trophyBronze: 130, trophySilver: 160, trophyGold: 210 },
            female: { medalBronze: 30, medalSilver: 40, medalGold: 55, trophyBronze: 80, trophySilver: 110, trophyGold: 160 },
            name: { En: 'Decline bench press', Fr: 'devellopé couché décliné' },
            type:'chest',src:{chest},id:42,lest : '1'
        },
         {
            male: { medalBronze: 10, medalSilver: 16, medalGold: 25, trophyBronze: 30, trophySilver: 40, trophyGold: 55 },
            female: { medalBronze: 8, medalSilver: 10, medalGold: 15, trophyBronze: 22, trophySilver: 30, trophyGold: 35 },
            name: { En: 'Hammer curl', Fr: 'Curl biceps marteau' },
            type:'arm',src:{arm},id:43,lest : '1'
        },
         {
            male: { medalBronze: 50, medalSilver: 65, medalGold: 80, trophyBronze: 110, trophySilver: 140, trophyGold: 180 },
            female: { medalBronze: 30, medalSilver: 45, medalGold: 60, trophyBronze: 70, trophySilver: 90, trophyGold: 130 },
            name: { En: 'Seated cable row', Fr: 'Tirage dos assis' },
            type:'back',src:{back},id:44,lest : '1'
        },
         {
            male: { medalBronze: 20, medalSilver: 30, medalGold: 40, trophyBronze: 60, trophySilver: 90, trophyGold: 125 },
            female: { medalBronze: 10, medalSilver: 20, medalGold: 30, trophyBronze: 45, trophySilver: 60, trophyGold: 85 },
            name: { En: 'Triceps rope pushdown', Fr: 'Triceps a la corde' },
            type:'arm',src:{arm},id:45,lest : '1'

        },
         {
            male: { medalBronze: 15, medalSilver: 30, medalGold: 40, trophyBronze: 60, trophySilver: 90, trophyGold: 125, },
            female: { medalBronze: 10, medalSilver: 20, medalGold: 30, trophyBronze: 45, trophySilver: 70, trophyGold: 90 },
            name: { En: 'Dumbell shrug', Fr: 'shrug aux haltéres' },
            type:'back',src:{back},id:46,lest : '1'

        },
         {
            male: { medalBronze: 50, medalSilver: 70, medalGold: 100, trophyBronze: 120, trophySilver: 140, trophyGold: 170 },
            female: { medalBronze: 30, medalSilver: 40, medalGold: 55, trophyBronze: 75, trophySilver: 95, trophyGold: 130 },
            name: { En: 'Close grip bench press', Fr: 'devellopé couché prise serrée' },
            type:'chest',src:{chest},id:47,lest : '1'
        },
         {
            male: { medalBronze: 8, medalSilver: 12, medalGold: 20, trophyBronze: 30, trophySilver: 50, trophyGold: 65, },
            female: { medalBronze: 5, medalSilver: 8, medalGold: 12, trophyBronze: 17, trophySilver: 28, trophyGold: 40 },
            name: { En: 'Dumbell fly', Fr: 'Ecarté-couché avec haltères' },
            type:'chest',src:{chest},id:48,lest : '1'

        },
         {
            male: { medalBronze: 50, medalSilver: 60, medalGold: 80, trophyBronze: 110, trophySilver: 140, trophyGold: 170, },
            female: { medalBronze: 40, medalSilver: 50, medalGold: 65, trophyBronze: 85, trophySilver: 100, trophyGold: 140 },
            name: { En: 'Pendlay row', Fr: 'Pendlay row ' },
            type:'back',src:{back},id:49,lest : '1'
        },
         {
            male: { medalBronze: 35, medalSilver: 50, medalGold: 75, trophyBronze: 100, trophySilver: 150, trophyGold: 200 },
            female: { medalBronze: 25, medalSilver: 40, medalGold: 65, trophyBronze: 80, trophySilver: 120, trophyGold: 170 },
            name: { En: 'Seated leg curl', Fr: 'flexion des jambes assis' },
            type:'leg',src:{leg},id:50,lest : '1'
        },
         {
            male: { medalBronze: 10, medalSilver: 18, medalGold: 25, trophyBronze: 40, trophySilver: 60, trophyGold: 85, },
            female: { medalBronze: 8, medalSilver: 14, medalGold: 25, trophyBronze: 32, trophySilver: 50, trophyGold: 70 },
            name: { En: 'Dumbell lunge', Fr: 'Fentes avec haltéres' },
            type:'leg',src:{leg},id:51,lest : '1'
        },
         {
            male: { medalBronze: 35, medalSilver: 50, medalGold: 80, trophyBronze: 100, trophySilver: 150, trophyGold: 200, },
            female: { medalBronze: 20, medalSilver: 30, medalGold: 45, trophyBronze: 75, trophySilver: 120, trophyGold: 150 },
            name: { En: 'T-bar row', Fr: 'tirage a la barre T' },
            type:'chest',src:{chest},id:52,lest : '1'
        },
         {
            male: { medalBronze: 5, medalSilver: 10, medalGold: 25, trophyBronze: 50, trophySilver: 80, trophyGold: 120, },
            female: { medalBronze: 2, medalSilver: 5, medalGold: 15, trophyBronze: 40, trophySilver: 70, trophyGold: 100 },
            name: { En: 'Crunches body weight', Fr: 'crunches au poids du corps' },
            type:'abs',src:{abs},id:53,lest : '1'
        },
         {
            male: { medalBronze: 5, medalSilver: 15, medalGold: 70, trophyBronze: 150, trophySilver: 270, trophyGold: 350, },
            female: { medalBronze: 2, medalSilver: 12, medalGold: 33, trophyBronze: 100, trophySilver: 180, trophyGold: 285 },
            name: { En: 'Crunches Lested', Fr: 'crunches lesté' },
            type:'abs',src:{abs},id:54,lest : '1'
        },
         {
            male: { medalBronze: 5, medalSilver: 10, medalGold: 25, trophyBronze: 70, trophySilver: 135, trophyGold: 200 },
            female: { medalBronze: 2, medalSilver: 5, medalGold: 10, trophyBronze: 40, trophySilver: 100, trophyGold: 160 },
            name: { En: 'Wirst Curl', Fr: 'flexion du poigné' },
            type:'arm',src:{arm},id:55,lest : '1'
        },

         {
            male: { medalBronze: 10, medalSilver: 25, medalGold: 35, trophyBronze: 55, trophySilver: 90, trophyGold: 130 },
            female: { medalBronze: 2, medalSilver: 5, medalGold: 15, trophyBronze: 30, trophySilver: 80, trophyGold: 130 },
            name: { En: 'Reverse barbell curl', Fr: 'flexion du biceps inversé à la barre' },
            type:'arm',src:{arm},id:56,lest : '1'
        },
         {
            male: { medalBronze: 5, medalSilver: 15, medalGold: 25, trophyBronze: 35, trophySilver: 50, trophyGold: 70 },
            female: { medalBronze: 2, medalSilver: 8, medalGold: 14, trophyBronze: 20, trophySilver: 31, trophyGold: 48 },
            name: { En: 'Dumbell triceps extention', Fr: 'extention des triceps aux haltéres' },
            type:'arm',src:{arm},id:57,lest : '1'
        },
         {
            male: { medalBronze: 10, medalSilver: 20, medalGold: 40, trophyBronze: 65, trophySilver: 100, trophyGold: 135 },
            female: { medalBronze: 3, medalSilver: 8, medalGold: 20, trophyBronze: 35, trophySilver: 60, trophyGold: 85 },
            name: { En: 'Triceps extension', Fr: 'extension des triceps à la barre' },
            type:'arm',src:{arm},id:58,lest : '1'
        },
         {
            male: { medalBronze: 25, medalSilver: 40, medalGold: 60, trophyBronze: 80, trophySilver: 120, trophyGold: 165 },
            female: { medalBronze: 15, medalSilver: 25, medalGold: 40, trophyBronze: 60, trophySilver: 80, trophyGold: 110 },
            name: { En: 'Upright row', Fr: 'Tirage clavicule' },
            type:'back',src:{back},id:59,lest : '1'
        },
         {
            male: { medalBronze: 10, medalSilver: 20, medalGold: 40, trophyBronze: 60, trophySilver: 85, trophyGold: 120 },
            female: { medalBronze: 5, medalSilver: 10, medalGold: 25, trophyBronze: 40, trophySilver: 55, trophyGold: 85 },
            name: { En: 'Precher curl', Fr: 'flexion du biceps au pupitre' },
            type:'arm',src:{arm},id:60,lest : '1'
        },
         {
            male: { medalBronze: 20, medalSilver: 35, medalGold: 50, trophyBronze: 80, trophySilver: 120, trophyGold: 170 },
            female: { medalBronze: 15, medalSilver: 30, medalGold: 40, trophyBronze: 60, trophySilver: 80, trophyGold: 120 },
            name: { En: 'Lying leg curl', Fr: 'flexion des jambes allongé' },
            type:'leg',src:{leg},id:61,lest : '1'
        },
         {
            male: { medalBronze: 10, medalSilver: 20, medalGold: 30, trophyBronze: 55, trophySilver: 80, trophyGold: 110, },
            female: { medalBronze: 8, medalSilver: 15, medalGold: 25, trophyBronze: 40, trophySilver: 60, trophyGold: 85 },
            name: { En: 'Lying triceps', Fr: 'extension des triceps allongé' },
            type:'arm',src:{arm},id:62,lest : '1'
        },
         {
            male: { medalBronze: 2, medalSilver: 4, medalGold: 10, trophyBronze: 25, trophySilver: 40, trophyGold: 60, },
            female: { medalBronze: 1, medalSilver: 2, medalGold: 10, trophyBronze: 16, trophySilver: 28, trophyGold: 40 },
            name: { En: 'Dumbell front raise', Fr: 'Elevation frontale haltéres' },
            type:'shoulder',src:{shoulder},id:63,lest : '1'
        },
        {
            male: { medalBronze: 5, medalSilver: 20, medalGold: 35, trophyBronze: 55, trophySilver: 95, trophyGold: 130, },
            female: { medalBronze: 2, medalSilver: 10, medalGold: 25, trophyBronze: 45, trophySilver: 90, trophyGold: 120 },
            name: { En: 'Sits up body wheight', Fr: 'Relevé du buste au poids du corps' },
            type:'abs',src:{abs},id:64,lest : '2'
        },
         {
            male: { medalBronze: 5, medalSilver: 20, medalGold: 80, trophyBronze: 170, trophySilver: 270, trophyGold: 390, },
            female: { medalBronze: 5, medalSilver: 20, medalGold: 40, trophyBronze: 110, trophySilver: 200, trophyGold: 300 },
            name: { En: 'Sits up Lested', Fr: 'Relevé du buste lesté' },
            type:'abs',src:{abs},id:65,lest : '1'
        },
         {
            male: { medalBronze: 15, medalSilver: 25, medalGold: 40, trophyBronze: 60, trophySilver: 80, trophyGold: 110, },
            female: { medalBronze: 10, medalSilver: 20, medalGold: 35, trophyBronze: 45, trophySilver: 63, trophyGold: 80 },
            name: { En: 'Ez bar Curl', Fr: 'flexion biceps barre en Z' },
            type:'arm',src:{arm},id:66,lest : '1'
        },
         {
            male: { medalBronze: 1, medalSilver: 3, medalGold: 5, trophyBronze: 9, trophySilver: 11, trophyGold: 18, },
            female: { medalBronze: 1, medalSilver: 2, medalGold: 3, trophyBronze: 4, trophySilver: 8, trophyGold: 12 },
            name: { En: 'Muscle up body wheight', Fr: 'Muscle up au poids du corps' },
            type:'back',src:{back},id:67,lest : '2'
        },
         {
            male: { medalBronze: -12, medalSilver: -2, medalGold: 2, trophyBronze: 17, trophySilver: 34, trophyGold: 50, },
            female: { medalBronze: -15, medalSilver: -6, medalGold: 1, trophyBronze: 7, trophySilver: 20, trophyGold: 34 },
            name: { En: 'Muscle up lested', Fr: 'Muscle up lesté' },
            type:'back',src:{back},id:68,lest : '1'
        },
         {
            male: { medalBronze: 8, medalSilver: 12, medalGold: 20, trophyBronze: 30, trophySilver: 44, trophyGold: 60, },
            female: { medalBronze: 6, medalSilver: 10, medalGold: 15, trophyBronze: 22, trophySilver: 30, trophyGold: 40 },
            name: { En: 'Dumbell concentration curl', Fr: 'Flexion de l’avant-bras coude calé ' },
            type:'arm',src:{arm},id:69,lest : '1'
        },
         {
            male: { medalBronze: 5, medalSilver: 15, medalGold: 30, trophyBronze: 50, trophySilver: 100, trophyGold: 140 },
            female: { medalBronze: 2, medalSilver: 5, medalGold: 10, trophyBronze: 40, trophySilver: 700, trophyGold: 110 },
            name: { En: 'Bodywheight squat', Fr: 'squat au poids de corps' },
            type:'leg',src:{leg},id:70,lest : '2'
        },

    ],
    atlectics:[
        {
            male: { medalBronze: 9.27, medalSilver: 7.49, medalGold: 6.4, trophyBronze: 5.50, trophySilver: 5.10, trophyGold: 4.30 },
            female: { medalBronze: 10.44, medalSilver: 9.10, medalGold: 7.49, trophyBronze: 6.49, trophySilver: 6.10, trophyGold: 5.10 },
            name: { En: '1 mile run', Fr: 'course a pieds a 1 miles' }
        },
        {
            male: { medalBronze:31.34, medalSilver: 26.21, medalGold: 22.40, trophyBronze: 19.56, trophySilver: 17.49, trophyGold: 16.10, },
            female: { medalBronze: 35.39, medalSilver: 30.41, medalGold: 26.21, trophyBronze: 23.08, trophySilver: 21.01, trophyGold: 17.49 },
            name: { En: '5k run', Fr: 'course a pieds a 5km' }
        },
        {
            male: { medalBronze: 65.39, medalSilver: 54.42, medalGold: 47.01, trophyBronze: 41.20, trophySilver: 36.57, trophyGold: 32.30, },
            female: { medalBronze: 74.24, medalSilver: 63.57, medalGold: 54.49, trophyBronze: 48.04, trophySilver: 43.40, trophyGold: 36.57 },
            name: { En: '10k run', Fr: 'course a pieds a 10km' }
        },
        {
            male: { medalBronze: 145.17, medalSilver: 121.17, medalGold: 101.31, trophyBronze: 91.42, trophySilver: 81.42, trophyGold: 71, },
            female: { medalBronze: 163.57, medalSilver: 141.20, medalGold: 121.2, trophyBronze: 106.2, trophySilver: 96.3, trophyGold: 81.42 },
            name: { En: 'half maraton', Fr: 'demi marathon' }
        },
        {
            male: { medalBronze: 297.42, medalSilver: 250.19, medalGold: 216.17, trophyBronze: 190.40, trophySilver: 170.40, trophyGold: 160.40, },
            female: { medalBronze: 334.14, medalSilver: 290.49, medalGold: 250.19, trophyBronze: 220.33, trophySilver: 200.50, trophyGold: 180.5 },
            name: { En: 'maraton', Fr: 'squat au poids de corps' }
        },
    ]
}
