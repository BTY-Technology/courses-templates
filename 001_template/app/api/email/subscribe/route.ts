import { NextRequest, NextResponse } from 'next/server'
import { ApiResponse } from '@/types'

/**
 * POST /api/email/subscribe
 * Subscribes user to email list and triggers lead magnet delivery
 *
 * In production, implement:
 * - Email service integration (Mailchimp, ConvertKit, SendGrid)
 * - Lead magnet email sequence trigger
 * - Database storage of subscriber info
 * - Double opt-in confirmation
 * - GDPR compliance
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, name, source } = body

    // Validate input
    if (!email) {
      const response: ApiResponse = {
        success: false,
        error: {
          message: 'Email is required',
          code: 'INVALID_INPUT',
        },
      }
      return NextResponse.json(response, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      const response: ApiResponse = {
        success: false,
        error: {
          message: 'Invalid email format',
          code: 'INVALID_EMAIL',
        },
      }
      return NextResponse.json(response, { status: 400 })
    }

    // TODO: Implement email service integration
    // Example with Mailchimp:
    // const mailchimp = require('@mailchimp/mailchimp_marketing')
    // mailchimp.setConfig({
    //   apiKey: process.env.MAILCHIMP_API_KEY,
    //   server: process.env.MAILCHIMP_SERVER_PREFIX,
    // })
    //
    // await mailchimp.lists.addListMember(process.env.MAILCHIMP_LIST_ID, {
    //   email_address: email,
    //   status: 'subscribed',
    //   merge_fields: {
    //     FNAME: name,
    //   },
    //   tags: [source],
    // })

    // TODO: Trigger lead magnet email sequence
    // TODO: Store subscriber in database

    // Mock successful response
    const response: ApiResponse = {
      success: true,
      data: {
        message: 'Successfully subscribed! Check your email for the free study guide.',
        subscriber: {
          email,
          name,
          source: source || 'homepage',
          subscribedAt: new Date(),
        },
      },
    }

    return NextResponse.json(response, { status: 200 })
  } catch (error) {
    console.error('Subscription error:', error)
    const response: ApiResponse = {
      success: false,
      error: {
        message: 'Failed to subscribe. Please try again.',
        code: 'SUBSCRIPTION_ERROR',
      },
    }
    return NextResponse.json(response, { status: 500 })
  }
}
