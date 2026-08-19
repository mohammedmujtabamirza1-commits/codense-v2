# Codense Tally setup

The website integration is ready, but a real form must be created and published in the Codense Tally account.

## Form

Create a form named **Codense Project Inquiry** with exactly these questions:

1. **What's your name?** — Short answer, required
2. **What's your business email?** — Email, required
3. **What's your company or website?** — Short answer, optional
4. **What would you like help with?** — Long answer, required
   - Description: `Tell us about the repetitive work, workflow, customer experience, or business problem you'd like to improve.`

Do not add budget, timeline, phone, company-size, revenue, or other qualification fields.

## Appearance and embed

- Use a near-black background (`#0b0a0f`), light text (`#f6f4f8`), and purple (`#805bff`) for buttons, links, and focused inputs.
- Keep the design minimal and left aligned.
- In **Share → Standard embed**, enable dynamic height, hide the form title, align left, and use a transparent background.
- Configure the Tally completion page with:
  - Heading: `Thanks — we've got it.`
  - Copy: `We'll review what you've shared and get back to you if it looks like Codense can help.`

## Notifications and protection

- Enable self-email notifications to `contact@codense.in` and include all four answers.
- Enable Tally's standard spam protection without adding extra visitor questions.
- Optionally enable a respondent email confirmation using the approved copy in the project brief.

## Connect it

Copy `.env.example` to `.env.local` and add the public form ID from the published URL:

```env
NEXT_PUBLIC_TALLY_FORM_ID=your_real_form_id
```

Restart the development server after changing the environment value.

## Final verification

Submit one inquiry using controlled test data. Confirm the success state, the submission in Tally, and delivery to `contact@codense.in`. Delete the test entry afterward if practical.
