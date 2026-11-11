
// ===============================================
// ELVIS MAINA
// IYF WEEKEND ACADEMY SEASON 12
// WEEK 5: DOM MANIPULATION
// LESSON 9 AND LESSON 10
// ===============================================


// ===============================================
// LESSON 9.1: SELECTING ELEMENTS
// ===============================================

// 1. getElementById()
const header = document.getElementById("main-header");

console.log("getElementById:", header);


// 2. getElementsByClassName()
const contents = document.getElementsByClassName("content");

console.log("getElementsByClassName:", contents);


// 3. getElementsByTagName()
const paragraphs = document.getElementsByTagName("p");

console.log("getElementsByTagName:", paragraphs);


// 4. querySelector()
const firstLink = document.querySelector(".nav-link");

console.log("querySelector:", firstLink);


// 5. querySelectorAll()
const allLinks = document.querySelectorAll(".nav-link");

console.log("querySelectorAll:", allLinks);


// PRACTICE TASKS

// Select the h1 element
const heading = document.querySelector("h1");

console.log("H1:", heading);


// Select all elements with class content
const allContents = document.querySelectorAll(".content");

console.log("All content elements:", allContents);


// Select the contact form
const contactForm = document.getElementById("contact-form");

console.log("Contact form:", contactForm);


// Select email input
const emailInput = document.querySelector("#email");

console.log("Email input:", emailInput);


// Select all navigation list items
const navItems = document.querySelectorAll(".nav-list li");

console.log("Navigation items:", navItems);


// Select the first navigation link
const firstNavLink = document.querySelector(".nav-link");

console.log("First navigation link:", firstNavLink);


// Select the last paragraph
const lastParagraph = document.querySelector("footer p");

console.log("Last paragraph:", lastParagraph);


// ===============================================
// LESSON 9.2: TRAVERSING THE DOM
// ===============================================

const nav = document.querySelector("nav");

// Parent
console.log("Navigation parent:", nav.parentElement);


// Children
console.log("Navigation children:", nav.children);


// First child
console.log("First navigation child:", nav.firstElementChild);


// Last child
console.log("Last navigation child:", nav.lastElementChild);


// Siblings
const article = document.querySelector("article");

console.log("Next sibling:", article.nextElementSibling);

console.log("Previous sibling:", article.previousElementSibling);


// Descendants
const navLinks = nav.querySelectorAll("a");

console.log("Navigation descendants:", navLinks);


// PRACTICE TASKS

// 1. Select header and navigate to nav
const selectedHeader = document.getElementById("main-header");

const headerNav = selectedHeader.querySelector("nav");

console.log("Header navigation:", headerNav);


// 2. Select first nav-link and get its parent li
const selectedLink = document.querySelector(".nav-link");

const parentListItem = selectedLink.parentElement;

console.log("Parent list item:", parentListItem);


// 3. Select article and get next sibling
const articleSection = article.nextElementSibling;

console.log("Article next sibling:", articleSection);


// 4. Select ul and get all child li elements
const navigationList = document.querySelector(".nav-list");

const listChildren = navigationList.children;

console.log("Navigation list children:", listChildren);


// 5. Start from footer and navigate to body
const footer = document.querySelector("footer");

const footerBody = footer.parentElement.parentElement;

console.log("Body from footer:", footerBody);


// ===============================================
// LESSON 9.3: MODIFYING CONTENT
// ===============================================

// Exercise 1: Text Content

const h1 = document.querySelector("h1");

// Reading text
console.log("Text content:", h1.textContent);

console.log("Inner text:", h1.innerText);


// Keep original heading for restoration
const originalHeading = h1.textContent;


// Exercise 2: HTML Content

console.log("Article HTML:", article.innerHTML);


// Safe HTML demonstration
const safeParagraph = document.createElement("p");

safeParagraph.textContent =
    "This paragraph was created using JavaScript.";

article.appendChild(safeParagraph);


// Security demonstration
const userInput =
    `<img src="x" onerror="alert('hacked!')">`;

// Safe approach: display user input as text
const securityDemo = document.createElement("p");

securityDemo.textContent = userInput;

article.appendChild(securityDemo);


// Exercise 3: Attributes

const link = document.querySelector(".nav-link");


// Get attribute
console.log("Link href:", link.getAttribute("href"));

console.log("Link property:", link.href);


// Check attribute
console.log("Has target:", link.hasAttribute("target"));


// Set attribute
link.setAttribute("target", "_blank");


// Remove attribute
link.removeAttribute("target");


// Data attributes demonstration
const dataElement = document.createElement("div");

dataElement.dataset.id = "123";

dataElement.dataset.category = "tech";

console.log("Data ID:", dataElement.dataset.id);

console.log("Data category:", dataElement.dataset.category);

dataElement.dataset.newAttr = "value";

console.log("New data attribute:", dataElement.dataset.newAttr);


// Exercise 4: Styles

const container = document.querySelector(".container");

container.style.backgroundColor = "#f0f0f0";

container.style.padding = "30px";

container.style.borderRadius = "8px";


// Multiple styles
Object.assign(container.style, {

    backgroundColor: "#ffffff",

    color: "#263238",

    padding: "20px"

});


// ===============================================
// LESSON 9.4: ADDING AND REMOVING ELEMENTS
// ===============================================


// Exercise 1: Creating Elements

const newParagraph = document.createElement("p");

newParagraph.textContent = "This is a new paragraph!";

newParagraph.className = "content highlight";


// Add to article
article.appendChild(newParagraph);


// Insert before another element
const firstParagraph = article.querySelector(".content");

const insertedParagraph = document.createElement("p");

insertedParagraph.textContent = "Inserted before the first paragraph.";

article.insertBefore(insertedParagraph, firstParagraph);


// Modern insertion methods
const prependParagraph = document.createElement("p");

prependParagraph.textContent = "Added using prepend().";

article.prepend(prependParagraph);


const appendParagraph = document.createElement("p");

appendParagraph.textContent = "Added using append().";

article.append(appendParagraph);


const beforeParagraph = document.createElement("p");

beforeParagraph.textContent = "Added using before().";

firstParagraph.before(beforeParagraph);


const afterParagraph = document.createElement("p");

afterParagraph.textContent = "Added using after().";

firstParagraph.after(afterParagraph);


// Exercise 2: Removing Elements

// Create a safe demonstration instead of removing
// the actual practice page footer.
const removableElement = document.createElement("p");

removableElement.textContent = "This element can be removed.";

article.appendChild(removableElement);


// Remove an element
function removeDemoElement() {

    removableElement.remove();

}


// Remove a child
function removeLastNavItem() {

    const lastItem = navigationList.querySelector("li:last-child");

    if (lastItem) {

        lastItem.parentElement.removeChild(lastItem);

    }

}


// Clear article children demonstration
function clearArticle() {

    article.replaceChildren();

}


// Exercise 3: Cloning Elements

const navItem = document.querySelector(".nav-link").parentElement;

const clone = navItem.cloneNode(true);

clone.querySelector("a").textContent = "New Link";

clone.querySelector("a").href = "#new-link";

navigationList.appendChild(clone);


// Build: Add navigation item dynamically

function addNavItem(text, href) {

    const li = document.createElement("li");

    const anchor = document.createElement("a");

    anchor.textContent = text;

    anchor.href = href;

    anchor.className = "nav-link";

    li.appendChild(anchor);

    navigationList.appendChild(li);

}

addNavItem("Blog", "#blog");

addNavItem("Portfolio", "#portfolio");


// ===============================================
// LESSON 10.1: EVENT LISTENERS
// ===============================================


// Create demonstration area
const demoArea = document.createElement("section");

demoArea.id = "event-demo";

demoArea.style.cssText =
    "margin-top:25px;padding:20px;border:1px solid #ccc;border-radius:8px;";

document.body.appendChild(demoArea);


// Basic event button
const clickButton = document.createElement("button");

clickButton.textContent = "Click Me";

demoArea.appendChild(clickButton);


clickButton.addEventListener("click", function() {

    console.log("Button clicked!");

});


clickButton.addEventListener("click", () => {

    console.log("Clicked again!");

});


// Named function
function handleClick() {

    console.log("Handled!");

}

clickButton.addEventListener("click", handleClick);


// Remove named listener after demonstrating
clickButton.removeEventListener("click", handleClick);


// ===============================================
// BUILD: CLICK COUNTER
// ===============================================

const counterTitle = document.createElement("h2");

counterTitle.textContent = "Click Counter";

demoArea.appendChild(counterTitle);


let count = 0;


const counterDisplay = document.createElement("h3");

counterDisplay.textContent = count;

demoArea.appendChild(counterDisplay);


// Plus button
const plusButton = document.createElement("button");

plusButton.textContent = "+";

demoArea.appendChild(plusButton);


// Minus button
const minusButton = document.createElement("button");

minusButton.textContent = "-";

minusButton.style.marginLeft = "10px";

demoArea.appendChild(minusButton);


// Reset button
const resetButton = document.createElement("button");

resetButton.textContent = "Reset";

resetButton.style.marginLeft = "10px";

demoArea.appendChild(resetButton);


// Update counter
function updateCounter() {

    counterDisplay.textContent = count;

}


// Increase
plusButton.addEventListener("click", function() {

    count++;

    updateCounter();

});


// Decrease
minusButton.addEventListener("click", function() {

    if (count > 0) {

        count--;

    }

    updateCounter();

});


// Reset
resetButton.addEventListener("click", function() {

    count = 0;

    updateCounter();

});


// ===============================================
// LESSON 10.2: THE EVENT OBJECT
// ===============================================

document.addEventListener("click", function(event) {

    console.log("Target:", event.target);

    console.log("Current Target:", event.currentTarget);

    console.log("Event type:", event.type);

    console.log(
        "Mouse position:",
        event.clientX,
        event.clientY
    );

});


// Keyboard event object
document.addEventListener("keydown", function(event) {

    console.log("Key:", event.key);

    console.log("Code:", event.code);

    console.log("Shift:", event.shiftKey);

    console.log("Ctrl:", event.ctrlKey);

    console.log("Alt:", event.altKey);

});


// ===============================================
// BUILD: KEYBOARD SHORTCUTS
// ===============================================


// Ctrl + S: Show Saved message
// Ctrl + Enter: Submit form
// Escape: Clear form inputs

document.addEventListener("keydown", function(event) {

    // Ctrl + S
    if (event.ctrlKey && event.key.toLowerCase() === "s") {

        event.preventDefault();

        alert("Saved!");

    }


    // Escape: Clear form inputs
    if (event.key === "Escape") {

        const formInputs = document.querySelectorAll(
            "#contact-form input"
        );

        formInputs.forEach(function(input) {

            input.value = "";

            clearError(input);

        });

    }


    // Ctrl + Enter: Submit form
    if (
        event.ctrlKey &&
        event.key === "Enter" &&
        contactForm
    ) {

        event.preventDefault();

        contactForm.requestSubmit();

    }

});


// ===============================================
// LESSON 10.3: EVENT BUBBLING
// ===============================================


// Create nested elements
const grandparent = document.createElement("div");

grandparent.id = "grandparent";

grandparent.textContent = "Grandparent";


const parent = document.createElement("div");

parent.id = "parent";

parent.textContent = "Parent";


const child = document.createElement("div");

child.id = "child";

child.textContent = "Child";


grandparent.appendChild(parent);

parent.appendChild(child);

demoArea.appendChild(grandparent);


// Style nested elements
Object.assign(grandparent.style, {

    backgroundColor: "#dcedc8",

    padding: "20px",

    marginTop: "20px"

});


Object.assign(parent.style, {

    backgroundColor: "#c8e6c9",

    padding: "20px",

    marginTop: "10px"

});


Object.assign(child.style, {

    backgroundColor: "#a5d6a7",

    padding: "20px",

    marginTop: "10px",

    cursor: "pointer"

});


// Bubbling events
grandparent.addEventListener("click", function() {

    console.log("Grandparent clicked");

});


parent.addEventListener("click", function() {

    console.log("Parent clicked");

});


child.addEventListener("click", function() {

    console.log("Child clicked");

});


// Expected order when Child is clicked:
// Child → Parent → Grandparent


// ===============================================
// LESSON 10.3: EVENT DELEGATION
// ===============================================


// Create delegated task list
const delegationTitle = document.createElement("h2");

delegationTitle.textContent = "Event Delegation Practice";

demoArea.appendChild(delegationTitle);


const taskForm = document.createElement("form");

taskForm.style.marginTop = "15px";


const taskInput = document.createElement("input");

taskInput.type = "text";

taskInput.placeholder = "Enter a practice task";

taskInput.required = true;


const taskAddButton = document.createElement("button");

taskAddButton.type = "submit";

taskAddButton.textContent = "Add Task";


taskForm.append(taskInput, taskAddButton);

demoArea.appendChild(taskForm);


// Parent list
const delegatedList = document.createElement("ul");

delegatedList.style.marginTop = "15px";

demoArea.appendChild(delegatedList);


// Function to create task
function createPracticeTask(text) {

    const li = document.createElement("li");

    li.className = "item";

    li.style.padding = "10px";

    li.style.marginBottom = "8px";

    li.style.backgroundColor = "#f1f8e9";

    li.style.cursor = "pointer";


    const span = document.createElement("span");

    span.textContent = text;


    const deleteBtn = document.createElement("button");

    deleteBtn.type = "button";

    deleteBtn.className = "delete-task";

    deleteBtn.textContent = "Delete";

    deleteBtn.style.marginLeft = "15px";


    li.append(span, deleteBtn);

    return li;

}


// Add practice task
taskForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const text = taskInput.value.trim();

    if (!text) return;

    const newTask = createPracticeTask(text);

    delegatedList.appendChild(newTask);

    taskInput.value = "";

});


// ONE event listener on parent UL
delegatedList.addEventListener("click", function(event) {

    // Find nearest list item
    const item = event.target.closest("li");

    if (!item || !delegatedList.contains(item)) {

        return;

    }


    // Delete task
    if (event.target.closest(".delete-task")) {

        item.remove();

        return;

    }


    // Toggle completed state
    if (event.target.closest("li")) {

        item.classList.toggle("completed");

        item.style.textDecoration =
            item.classList.contains("completed")
                ? "line-through"
                : "none";

    }

});


// ===============================================
// LESSON 10.4: FORM HANDLING
// ===============================================

const nameInput = document.getElementById("name");


// Create error message
function showError(input, message) {

    input.classList.add("error");

    input.style.borderColor = "red";


    let errorMessage = input.nextElementSibling;

    if (
        !errorMessage ||
        !errorMessage.classList.contains("error-message")
    ) {

        errorMessage = document.createElement("small");

        errorMessage.className = "error-message";

        errorMessage.style.color = "red";

        input.after(errorMessage);

    }

    errorMessage.textContent = message;

}


// Clear error
function clearError(input) {

    input.classList.remove("error");

    input.style.borderColor = "";


    const errorMessage = input.nextElementSibling;

    if (
        errorMessage &&
        errorMessage.classList.contains("error-message")
    ) {

        errorMessage.remove();

    }

}


// Validate name in real time
nameInput.addEventListener("input", function(event) {

    const value = event.target.value.trim();

    if (value.length < 2) {

        showError(nameInput, "Name must be at least 2 characters.");

    } else {

        clearError(nameInput);

    }

});


// Validate email in real time
emailInput.addEventListener("input", function(event) {

    const value = event.target.value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(value)) {

        showError(emailInput, "Please enter a valid email.");

    } else {

        clearError(emailInput);

    }

});


// Validate form data
function isValid(data) {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return (
        data.name.trim().length >= 2 &&
        emailRegex.test(data.email.trim())
    );

}


// Show success message
function showSuccess(message) {

    let successMessage = document.getElementById(
        "success-message"
    );

    if (!successMessage) {

        successMessage = document.createElement("p");

        successMessage.id = "success-message";

        successMessage.style.color = "green";

        contactForm.after(successMessage);

    }

    successMessage.textContent = message;

}


// Handle form submission
contactForm.addEventListener("submit", function(event) {

    event.preventDefault();


    // Collect form data
    const formData = new FormData(contactForm);

    const data = Object.fromEntries(formData);


    console.log("Form data:", data);


    // Validate
    if (isValid(data)) {

        showSuccess("Form submitted successfully!");

        contactForm.reset();

        clearError(nameInput);

        clearError(emailInput);

    } else {

        showSuccess("Please correct the errors before submitting.");

        if (data.name.trim().length < 2) {

            showError(
                nameInput,
                "Name must be at least 2 characters."
            );

        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {

            showError(
                emailInput,
                "Please enter a valid email."
            );

        }

    }

});


// ===============================================
// COMPLETION MESSAGE
// ===============================================

console.log("----------------------------------");

console.log("WEEK 5 DOM PRACTICE LOADED");

console.log("Lesson 9: DOM Manipulation");

console.log("Lesson 10: Events & User Interaction");

console.log("Elvis Maina - IYF Season 12");

console.log("----------------------------------");
