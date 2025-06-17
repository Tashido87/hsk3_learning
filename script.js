// Google Sheets API configuration
const API_KEY = "AIzaSyDp7usMq_6sQ9kjVLGpA_wuTSeJkGYKbaY";
const SPREADSHEET_ID = "1r_VRuf4MmJQEf__rB8fTSC0Q3MUOper-fWHW6CQSn-k";

// Chinese Learning App JavaScript

// Current day state
let currentDay = 1;
let lessonsData = {};

const lessonTitles = [
    "Family Members", "Daily Activities & Routines", "Food & Drinks",
    "Colors and Clothing", "Transportation", "Weather and Seasons",
    "Body Parts and Health", "Numbers and Time", "Animals and Nature",
    "School and Education", "Work and Professions", "Shopping and Money",
    "Hobbies and Sports", "Emotions and Feelings", "Directions and Places",
    "Technology and Media", "Furniture and Household", "Cooking and Kitchen",
    "Travel and Tourism", "Culture and Festivals", "Business and Economy",
    "Environment and Geography", "Art and Entertainment", "Medicine and Hospital",
    "Law and Government", "Science and Technology", "History and Tradition",
    "Communication and Language", "Social Relationships", "Review and Integration"
];

// DOM Elements
const currentDayDisplayElement = document.getElementById('currentDayDisplay');
const dayTitleElement = document.getElementById('dayTitle');
const vocabCountElement = document.getElementById('vocabCount');
const sentenceCountElement = document.getElementById('sentenceCount');
const progressFillElement = document.getElementById('progressFill');
const progressTextElement = document.getElementById('progressText');
const prevDayBtn = document.getElementById('prevDay');
const nextDayBtn = document.getElementById('nextDay');
const vocabTableBody = document.getElementById('vocabTableBody');
const sentencesContainer = document.getElementById('sentencesContainer');
const downloadVocabBtn = document.getElementById('downloadVocab');
const downloadSentencesBtn = document.getElementById('downloadSentences');
const themeToggleBtn = document.getElementById('themeToggle');

// Tab elements
const tabs = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-panel');

// Word Zoom Modal Elements
let wordZoomModal;
let zoomWordElement;
let zoomPinyinElement;
let zoomEnglishElement;

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    gapi.load('client', initClient);
});

function initClient() {
    gapi.client.init({
        'apiKey': API_KEY,
        'discoveryDocs': ["https://sheets.googleapis.com/$discovery/rest?version=v4"],
    }).then(function () {
        fetchLessonData(currentDay);
    });

    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeToggleIcon(currentTheme);
    createWordZoomModal();
    setupEventListeners();
}

function fetchLessonData(day) {
    gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: SPREADSHEET_ID,
        range: `${day}!A2:G`,
    }).then(function(response) {
        const range = response.result;
        if (range.values.length > 0) {
            const vocabulary = [];
            const sentences = [];
            for (let i = 0; i < range.values.length; i++) {
                const row = range.values[i];
                if (row[0]) {
                    vocabulary.push({
                        pinyin: row[0],
                        simplified: row[1],
                        traditional: row[2],
                        english: row[3]
                    });
                }
                if (row[4]) {
                    sentences.push({
                        simplified: row[4],
                        pinyin: row[5],
                        english: row[6]
                    });
                }
            }
            lessonsData[day] = {
                title: lessonTitles[day - 1],
                vocabulary: vocabulary,
                sentences: sentences
            };
            updateDisplay();
        } else {
            console.log('No data found.');
        }
    }, function(response) {
        console.log('Error: ' + response.result.error.message);
    });
}

function createWordZoomModal() {
    wordZoomModal = document.createElement('div');
    wordZoomModal.className = 'word-zoom-modal';
    wordZoomModal.innerHTML = `
        <div class="word-zoom-content">
            <button class="close-zoom"><i class="fas fa-times"></i></button>
            <div class="zoom-word"></div>
            <div class="zoom-pinyin"></div>
            <div class="zoom-english"></div>
        </div>
    `;
    document.body.appendChild(wordZoomModal);

    zoomWordElement = wordZoomModal.querySelector('.zoom-word');
    zoomPinyinElement = wordZoomModal.querySelector('.zoom-pinyin');
    zoomEnglishElement = wordZoomModal.querySelector('.zoom-english');
    const closeButton = wordZoomModal.querySelector('.close-zoom');

    if (closeButton) closeButton.addEventListener('click', closeWordZoomModal);
    wordZoomModal.addEventListener('click', function(event) {
        if (event.target === wordZoomModal) closeWordZoomModal();
    });
}

function openWordZoomModal(simplified, pinyin, english) {
    if (zoomWordElement) zoomWordElement.textContent = simplified;
    if (zoomPinyinElement) zoomPinyinElement.textContent = pinyin;
    if (zoomEnglishElement) zoomEnglishElement.textContent = english;
    if (wordZoomModal) wordZoomModal.classList.add('active');
}

function closeWordZoomModal() {
    if (wordZoomModal) wordZoomModal.classList.remove('active');
}

function setupEventListeners() {
    if (prevDayBtn) prevDayBtn.addEventListener('click', () => changeDay(-1));
    if (nextDayBtn) nextDayBtn.addEventListener('click', () => changeDay(1));
    if (downloadVocabBtn) downloadVocabBtn.addEventListener('click', () => downloadCSV('vocabulary'));
    if (downloadSentencesBtn) downloadSentencesBtn.addEventListener('click', () => downloadCSV('sentences'));
    if (themeToggleBtn) themeToggleBtn.addEventListener('click', toggleTheme);

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabName = tab.dataset.tab;
            if (tabName) switchTab(tabName);
            else console.error("Tab button missing data-tab attribute:", tab);
        });
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft' && prevDayBtn && !prevDayBtn.disabled) changeDay(-1);
        else if (e.key === 'ArrowRight' && nextDayBtn && !nextDayBtn.disabled) changeDay(1);
    });
}

function changeDay(direction) {
    const newDay = currentDay + direction;
    if (newDay > 0 && newDay <= 30) {
        currentDay = newDay;
        if (lessonsData[currentDay]) {
            updateDisplay();
        } else {
            fetchLessonData(currentDay);
        }
    }
}

function updateDisplay() {
    const dayData = lessonsData[currentDay];
    if (!dayData) {
        return;
    }

    if (currentDayDisplayElement) currentDayDisplayElement.textContent = `Day ${currentDay}`;
    if (dayTitleElement) dayTitleElement.textContent = `Day ${currentDay}: ${dayData.title || "Untitled Lesson"}`;

    const vocabLength = dayData.vocabulary ? dayData.vocabulary.length : 0;
    const sentencesLength = dayData.sentences ? dayData.sentences.length : 0;
    if (vocabCountElement) vocabCountElement.textContent = vocabLength;
    if (sentenceCountElement) sentenceCountElement.textContent = sentencesLength;

    const totalDays = 30;
    const progress = (currentDay / totalDays) * 100;
    if (progressFillElement) progressFillElement.style.width = `${progress}%`;
    if (progressTextElement) progressTextElement.innerHTML = `${currentDay}/${totalDays}`;

    if (prevDayBtn) prevDayBtn.disabled = currentDay === 1;
    if (nextDayBtn) nextDayBtn.disabled = currentDay === 30;

    updateVocabularyTable();
    updateSentences();
}

function updateVocabularyTable() {
    if (!vocabTableBody) return;
    const dayData = lessonsData[currentDay];
    vocabTableBody.innerHTML = '';

    if (dayData && dayData.vocabulary && dayData.vocabulary.length > 0) {
        dayData.vocabulary.forEach((word) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td class="pinyin-text">${word.pinyin || ''}</td>
                <td class="chinese-text simplified-char">${word.simplified || ''}</td>
                <td class="chinese-text traditional-char">${word.traditional || ''}</td>
                <td>${word.english || ''}</td>
            `;

            const simplifiedCell = row.querySelector('.simplified-char');
            const traditionalCell = row.querySelector('.traditional-char');

            if (simplifiedCell) {
                simplifiedCell.style.cursor = 'zoom-in';
                simplifiedCell.addEventListener('click', () => openWordZoomModal(word.simplified, word.pinyin, word.english));
            }

            if (traditionalCell) {
                traditionalCell.style.cursor = 'zoom-in';
                traditionalCell.addEventListener('click', () => openWordZoomModal(word.traditional, word.pinyin, word.english));
            }

            vocabTableBody.appendChild(row);
        });
    } else {
        vocabTableBody.innerHTML = '<tr><td colspan="4">No vocabulary available for this day.</td></tr>';
    }
}

function updateSentences() {
    if (!sentencesContainer) return;
    const dayData = lessonsData[currentDay];
    sentencesContainer.innerHTML = '';

    if (dayData && dayData.sentences && dayData.sentences.length > 0) {
        dayData.sentences.forEach((sentence, index) => {
            const sentenceCard = document.createElement('div');
            sentenceCard.className = 'sentence-card';
            sentenceCard.innerHTML = `
                <div class="sentence-number">${index + 1}</div>
                <div class="sentence-chinese">${sentence.simplified || ''}</div>
                <div class="sentence-pinyin">${sentence.pinyin || ''}</div>
                <div class="sentence-english">${sentence.english || ''}</div>
            `;
            const chineseTextElement = sentenceCard.querySelector('.sentence-chinese');
            if (chineseTextElement) {
                chineseTextElement.style.cursor = 'zoom-in';
                chineseTextElement.addEventListener('click', () => openWordZoomModal(sentence.simplified, sentence.pinyin, sentence.english));
            }
            sentencesContainer.appendChild(sentenceCard);
        });
    } else {
        sentencesContainer.innerHTML = '<p>No sentences available for this day.</p>';
    }
}

function switchTab(tabName) {
    tabs.forEach(tab => {
        tab.classList.remove('active');
        tab.setAttribute('aria-selected', 'false');
    });
    tabPanels.forEach(panel => panel.classList.remove('active'));

    const selectedTab = document.querySelector(`.tab-btn[data-tab="${tabName}"]`);
    const selectedPanel = document.getElementById(tabName);

    if (selectedTab) {
        selectedTab.classList.add('active');
        selectedTab.setAttribute('aria-selected', 'true');
    } else {
        console.error(`Tab button for '${tabName}' not found.`);
    }
    if (selectedPanel) selectedPanel.classList.add('active');
    else console.error(`Tab panel with id '${tabName}' not found.`);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeToggleIcon(newTheme);
}

function updateThemeToggleIcon(theme) {
    if (!themeToggleBtn) return;
    const sunIcon = themeToggleBtn.querySelector('.fa-sun');
    const moonIcon = themeToggleBtn.querySelector('.fa-moon');
    if (sunIcon && moonIcon) {
        sunIcon.style.display = theme === 'dark' ? 'none' : 'inline-block';
        moonIcon.style.display = theme === 'dark' ? 'inline-block' : 'none';
    }
}

function downloadCSV(type) {
    const dayData = lessonsData[currentDay];
    if (!dayData) {
        alert(`No data available for Day ${currentDay} to download.`);
        return;
    }

    let csvContent = '';
    let filename = '';

    if (type === 'vocabulary') {
        if (!dayData.vocabulary || dayData.vocabulary.length === 0) {
            alert(`No vocabulary data to download for Day ${currentDay}.`);
            return;
        }
        csvContent = 'Pinyin,Simplified,Traditional,English\n';
        dayData.vocabulary.forEach(word => {
            csvContent += `"${word.pinyin || ''}","${word.simplified || ''}","${word.traditional || ''}","${word.english || ''}"\n`;
        });
        filename = `Day${currentDay}_Vocabulary.csv`;
    } else if (type === 'sentences') {
        if (!dayData.sentences || dayData.sentences.length === 0) {
            alert(`No sentence data to download for Day ${currentDay}.`);
            return;
        }
        csvContent = 'Simplified,Pinyin,English\n';
        dayData.sentences.forEach(sentence => {
            csvContent += `"${sentence.simplified || ''}","${sentence.pinyin || ''}","${sentence.english || ''}"\n`;
        });
        filename = `Day${currentDay}_Sentences.csv`;
    } else {
        console.error("Invalid download type specified.");
        return;
    }

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    if (link.download !== undefined) {
        const url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute('download', filename);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    } else {
        alert("Your browser does not support direct CSV downloads. Please try a different browser.");
    }
}
